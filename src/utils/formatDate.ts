const padTwoDigits = (value: number) => String(value).padStart(2, "0");

export const formatArchiveDate = (date: Date) =>
  `${date.getUTCFullYear()}. ${padTwoDigits(date.getUTCMonth() + 1)}. ${padTwoDigits(date.getUTCDate())}.`;

export const formatArchivePeriod = (startedAt: Date, endedAt?: Date) =>
  `${formatArchiveDate(startedAt)} - ${endedAt ? formatArchiveDate(endedAt) : "현재"}`;
