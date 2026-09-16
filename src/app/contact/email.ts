export function formatDateJa(iso: string) {
  const [year, month, day] = iso.split("-");
  if (!year || !month || !day) return iso;
  return `${year}年${Number(month)}月${Number(day)}日`;
}

export function formatInquiryMessage(fields: {
  inquiryType: string;
  name: string;
  email: string;
  phone: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  checkInTime: string;
  adults: number | null;
  children: number | null;
  dinner: string;
  message: string;
}) {
  const lines = [
    ["お問い合わせ種別", fields.inquiryType],
    ["お名前", fields.name],
    ["メールアドレス", fields.email],
    ["電話番号", fields.phone],
    ["宿泊タイプ", fields.roomType],
    ["チェックイン", fields.checkIn ? formatDateJa(fields.checkIn) : ""],
    ["チェックアウト", fields.checkOut ? formatDateJa(fields.checkOut) : ""],
    ["チェックイン時間", fields.checkInTime],
    ["大人", fields.adults === null ? "" : String(fields.adults)],
    ["子供", fields.children === null ? "" : String(fields.children)],
    ["夕食の有無", fields.dinner],
  ]
    .filter(([, value]) => value !== "")
    .map(([label, value]) => `${label}：${value}`);

  if (fields.message) {
    lines.push("", "お問い合わせ内容：", fields.message);
  }

  return lines.join("\n");
}
