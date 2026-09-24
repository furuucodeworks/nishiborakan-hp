"use client";

import { useState, type FormEvent } from "react";
import {
  CHECK_IN_TIMES,
  DINNER_OPTIONS,
  INQUIRY_TYPES,
  ROOM_TYPES,
} from "@/app/contact/fields";
import {
  parseInquiryForm,
  toWeb3FormsBody,
  web3formsErrorMessage,
  type ContactState,
} from "@/app/contact/payload";

const initialState: ContactState = { ok: false, message: "" };

const fieldClass =
  "w-full h-11 px-4 border border-[#eeeeee] rounded-lg text-[13px] text-[#333333] bg-white outline-none focus:border-[#333333]";

const labelClass = "text-[11px] text-[#999999] tracking-wide";

export default function ContactForm({ accessKey }: { accessKey: string }) {
  const [state, setState] = useState<ContactState>(initialState);
  const [pending, setPending] = useState(false);
  const [inquiryType, setInquiryType] = useState("");
  const vacancyRequired = inquiryType === "空室確認";
  const messageRequired = inquiryType === "その他";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setState(initialState);

    try {
      const parsed = parseInquiryForm(new FormData(event.currentTarget));
      if (!parsed.ok || !("fields" in parsed)) {
        setState(parsed);
        return;
      }

      if (!accessKey) {
        setState({
          ok: false,
          message: "送信設定が完了していません。お手数ですがお電話でお問い合わせください。",
        });
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(toWeb3FormsBody(accessKey, parsed.fields)),
      });
      const data = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !data.success) {
        setState({
          ok: false,
          message: web3formsErrorMessage(data.message),
        });
        return;
      }

      setState({
        ok: true,
        message: "送信しました。内容を確認のうえご連絡いたします。",
      });
    } catch {
      setState({
        ok: false,
        message: "送信に失敗しました。時間をおいて再度お試しいただくか、お電話でご連絡ください。",
      });
    } finally {
      setPending(false);
    }
  }

  if (state.ok) {
    return (
      <p className="text-[13px] text-[#555555] text-center leading-[1.8] w-full">
        送信しました。
        <br />
        内容を確認のうえ、ご連絡いたします。
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <label className="flex flex-col gap-2">
        <span className={labelClass}>お名前 *</span>
        <input className={fieldClass} type="text" name="name" required autoComplete="name" />
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>メールアドレス *</span>
        <input
          className={fieldClass}
          type="email"
          name="email"
          required
          autoComplete="email"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>電話番号</span>
        <input
          className={fieldClass}
          type="tel"
          name="phone"
          autoComplete="tel"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>お問い合わせ種別 *</span>
        <select
          className={fieldClass}
          name="inquiryType"
          required
          value={inquiryType}
          onChange={(event) => setInquiryType(event.target.value)}
        >
          <option value="" disabled>
            選択してください
          </option>
          {INQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>
          宿泊タイプ{vacancyRequired ? " *" : ""}
        </span>
        <select
          className={fieldClass}
          name="roomType"
          required={vacancyRequired}
          defaultValue=""
        >
          <option value="" disabled>
            選択してください
          </option>
          {ROOM_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClass}>
            チェックイン{vacancyRequired ? " *" : ""}
          </span>
          <input
            className={fieldClass}
            type="date"
            name="checkIn"
            required={vacancyRequired}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClass}>
            チェックアウト{vacancyRequired ? " *" : ""}
          </span>
          <input
            className={fieldClass}
            type="date"
            name="checkOut"
            required={vacancyRequired}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>
          チェックイン時間{vacancyRequired ? " *" : ""}
        </span>
        <select
          className={fieldClass}
          name="checkInTime"
          required={vacancyRequired}
          defaultValue=""
        >
          <option value="" disabled>
            選択してください
          </option>
          {CHECK_IN_TIMES.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClass}>
            大人{vacancyRequired ? " *" : ""}
          </span>
          <input
            className={fieldClass}
            type="number"
            name="adults"
            min={1}
            inputMode="numeric"
            required={vacancyRequired}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClass}>子供</span>
          <input
            className={fieldClass}
            type="number"
            name="children"
            min={0}
            inputMode="numeric"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>
          夕食の有無{vacancyRequired ? " *" : ""}
        </span>
        <select
          className={fieldClass}
          name="dinner"
          required={vacancyRequired}
          defaultValue=""
        >
          <option value="" disabled>
            選択してください
          </option>
          {DINNER_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>
          お問い合わせ内容{messageRequired ? " *" : ""}
        </span>
        <textarea
          className="w-full min-h-[140px] px-4 py-3 border border-[#eeeeee] rounded-lg text-[13px] text-[#333333] bg-white outline-none focus:border-[#333333] resize-y"
          name="message"
          required={messageRequired}
          maxLength={2000}
        />
      </label>

      {state.message && (
        <p className="text-[13px] font-bold text-[#c0392b] leading-[1.8]">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex items-center justify-center w-full h-11 bg-[#333333] rounded-lg text-white text-xs transition-colors duration-200 enabled:hover:bg-[#555555] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
