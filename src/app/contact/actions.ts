"use server";

import { formatInquiryMessage } from "@/app/contact/email";
import {
  isCheckInTime,
  isDinnerOption,
  isInquiryType,
  isRoomType,
} from "@/app/contact/fields";

export type ContactState = {
  ok: boolean;
  message: string;
};

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function asCount(value: string) {
  if (value === "") return null;
  if (!/^\d+$/.test(value)) return NaN;
  return Number(value);
}

function web3formsErrorMessage(detail?: string) {
  const raw = detail?.toLowerCase() ?? "";
  if (raw.includes("invalid") && raw.includes("key")) {
    return "送信キーが無効です。Vercel の WEB3FORMS_ACCESS_KEY が最新か確認してください。";
  }
  if (raw.includes("verif")) {
    return "Web3Forms の確認メール内のリンクを開いて、受信メールを有効にしてください。";
  }
  return "送信に失敗しました。時間をおいて再度お試しいただくか、お電話でご連絡ください。";
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (asString(formData.get("botcheck"))) {
    return { ok: true, message: "送信しました。内容を確認のうえご連絡いたします。" };
  }

  const name = asString(formData.get("name"));
  const email = asString(formData.get("email"));
  const phone = asString(formData.get("phone"));
  const inquiryType = asString(formData.get("inquiryType"));
  const roomType = asString(formData.get("roomType"));
  const checkIn = asString(formData.get("checkIn"));
  const checkOut = asString(formData.get("checkOut"));
  const checkInTime = asString(formData.get("checkInTime"));
  const adults = asCount(asString(formData.get("adults")));
  const children = asCount(asString(formData.get("children")));
  const dinner = asString(formData.get("dinner"));
  const message = asString(formData.get("message"));

  if (!name || !email || !isInquiryType(inquiryType)) {
    return { ok: false, message: "必須項目を入力してください。" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "メールアドレスの形式が正しくありません。" };
  }

  if (message.length > 2000) {
    return { ok: false, message: "お問い合わせ内容は2000文字以内で入力してください。" };
  }

  const vacancy = inquiryType === "空室確認";

  if (vacancy) {
    if (
      !isRoomType(roomType) ||
      !checkIn ||
      !checkOut ||
      !isCheckInTime(checkInTime) ||
      !isDinnerOption(dinner)
    ) {
      return { ok: false, message: "必須項目を入力してください。" };
    }
    if (adults === null || Number.isNaN(adults) || adults < 1) {
      return { ok: false, message: "大人の人数を入力してください。" };
    }
  } else if (!message) {
    return { ok: false, message: "お問い合わせ内容を入力してください。" };
  }

  if (roomType && !isRoomType(roomType)) {
    return { ok: false, message: "宿泊タイプを選択してください。" };
  }

  if (checkInTime && !isCheckInTime(checkInTime)) {
    return { ok: false, message: "チェックイン時間を選択してください。" };
  }

  if (dinner && !isDinnerOption(dinner)) {
    return { ok: false, message: "夕食の有無を選択してください。" };
  }

  if (checkIn && checkOut && checkOut <= checkIn) {
    return { ok: false, message: "チェックアウト日はチェックイン日より後にしてください。" };
  }

  if (adults !== null && (Number.isNaN(adults) || adults < 1)) {
    return { ok: false, message: "大人の人数を正しく入力してください。" };
  }

  if (children !== null && (Number.isNaN(children) || children < 0)) {
    return { ok: false, message: "子供の人数を正しく入力してください。" };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
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
      body: JSON.stringify({
        access_key: accessKey,
        subject: `【NISHIBORAKAN】${inquiryType} / ${name}`,
        from_name: "GUEST HOUSE NISHIBORAKAN",
        name,
        email,
        replyto: email,
        message: formatInquiryMessage({
          inquiryType,
          name,
          email,
          phone,
          roomType,
          checkIn,
          checkOut,
          checkInTime,
          adults,
          children,
          dinner,
          message,
        }),
      }),
    });

    const data = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !data.success) {
      console.error("Web3Forms submit failed", data.message ?? response.status);
      return {
        ok: false,
        message: web3formsErrorMessage(data.message),
      };
    }
  } catch {
    return {
      ok: false,
      message: "送信に失敗しました。時間をおいて再度お試しいただくか、お電話でご連絡ください。",
    };
  }

  return { ok: true, message: "送信しました。内容を確認のうえ、ご連絡いたします。" };
}
