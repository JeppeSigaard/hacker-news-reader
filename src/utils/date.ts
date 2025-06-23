const monthNames = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const daysToMs = (days: number) => days * 86400000;

export function getDaysDiff(date: Date, now: Date): number {
  const copyDate = new Date(date.getTime());
  const copyNow = new Date(now.getTime());

  copyDate.setUTCHours(0, 0, 0, 0);
  copyNow.setUTCHours(0, 0, 0, 0);

  return (copyDate.getTime() - copyNow.getTime()) / daysToMs(1);
}

export function absoluteTime(date: Date) {
  let h: number | string = date.getHours();

  if (h < 10) {
    h = '0' + h;
  }

  let m: number | string = date.getMinutes();

  if (m < 10) {
    m = '0' + m;
  }

  return `${h}:${m}`;
}

export function relativeDateTime(date: Date, now: Date = new Date()) {
  const diff: number = getDaysDiff(date, now);
  const time = absoluteTime(date);

  // More than 6 days
  if (Math.abs(diff) >= 7) {
    const isThisYear = date.getFullYear() === now.getFullYear();
    const maybeYear = !isThisYear ? ` ${date.getFullYear()}` : '';

    return `${monthNames[date.getMonth()]} ${date.getDate()} ${maybeYear} ${time}`;
  }

  // 2-6 days
  if (Math.abs(diff) > 1) {
    return `${dayNames[date.getDay()]} ${time}`;
  }

  // Yesterday
  if (diff === -1) {
    return `Yesterday ${time}`;
  }

  // Today
  if (diff === 0) {
    return `Today ${time}`;
  }

  // Tomorrow
  if (diff === 1) {
    return `Tomorrow ${time}`;
  }
}
