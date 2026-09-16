import {
  parseInquiryForm,
  toWeb3FormsBody,
  web3formsErrorMessage,
  type ContactState,
} from "@/app/contact/payload";

export type { ContactState };

function getAccessKey() {
  return process.env.WEB3FORMS_ACCESS_KEY?.trim() ?? "";
}

export function isContactConfigured() {
  return Boolean(getAccessKey());
}

export async function submitInquiry(formData: FormData): Promise<ContactState> {
  const parsed = parseInquiryForm(formData);
  if (!parsed.ok || !("fields" in parsed)) {
    return parsed;
  }

  const accessKey = getAccessKey();
  if (!accessKey) {
    return {
      ok: false,
      message: "送信設定が完了していません。お手数ですがお電話でお問い合わせください。",
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(toWeb3FormsBody(accessKey, parsed.fields)),
    });

    const text = await response.text();
    let data: { success?: boolean; message?: string } = {};
    try {
      data = JSON.parse(text) as { success?: boolean; message?: string };
    } catch {
      console.error("Web3Forms returned non-JSON", response.status);
      return {
        ok: false,
        message: web3formsErrorMessage(text),
      };
    }

    if (!response.ok || !data.success) {
      console.error("Web3Forms submit failed", data.message ?? response.status);
      return {
        ok: false,
        message: web3formsErrorMessage(data.message),
      };
    }
  } catch (error) {
    console.error("Web3Forms submit error", error);
    return {
      ok: false,
      message: "送信に失敗しました。時間をおいて再度お試しいただくか、お電話でご連絡ください。",
    };
  }

  return { ok: true, message: "送信しました。内容を確認のうえご連絡いたします。" };
}
