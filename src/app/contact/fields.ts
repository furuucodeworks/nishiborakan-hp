export const INQUIRY_TYPES = ["空室確認", "その他"] as const;
export const ROOM_TYPES = [
  "MIXドミトリー 2段ベッド",
  "MIXドミトリー シングルベッド",
  "個室 TypeA",
  "個室 TypeB",
  "個室 TypeD",
] as const;
export const CHECK_IN_TIMES = [
  "16:00〜17:00",
  "17:00〜18:00",
  "18:00〜19:00",
  "19:00〜20:00",
  "20:00〜21:00",
  "21:00〜22:00",
] as const;
export const DINNER_OPTIONS = ["あり", "なし"] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];
export type RoomType = (typeof ROOM_TYPES)[number];
export type CheckInTime = (typeof CHECK_IN_TIMES)[number];
export type DinnerOption = (typeof DINNER_OPTIONS)[number];

export function isInquiryType(value: string): value is InquiryType {
  return INQUIRY_TYPES.includes(value as InquiryType);
}

export function isRoomType(value: string): value is RoomType {
  return ROOM_TYPES.includes(value as RoomType);
}

export function isCheckInTime(value: string): value is CheckInTime {
  return CHECK_IN_TIMES.includes(value as CheckInTime);
}

export function isDinnerOption(value: string): value is DinnerOption {
  return DINNER_OPTIONS.includes(value as DinnerOption);
}
