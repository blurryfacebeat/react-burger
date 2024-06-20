import {
  format,
  differenceInDays,
  differenceInWeeks,
  differenceInYears,
  isToday,
  isYesterday,
} from 'date-fns';

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();

  if (isToday(date)) {
    return `Сегодня, ${format(date, 'HH:mm')}`;
  }

  if (isYesterday(date)) {
    return `Вчера, ${format(date, 'HH:mm')}`;
  }

  const daysDifference = differenceInDays(now, date);
  if (daysDifference < 7) {
    return `${daysDifference} дня назад, ${format(date, 'HH:mm')}`;
  }

  const weeksDifference = differenceInWeeks(now, date);
  if (weeksDifference < 4) {
    return `${weeksDifference} недели назад, ${format(date, 'HH:mm')}`;
  }

  const yearsDifference = differenceInYears(now, date);
  if (yearsDifference < 1) {
    const monthsDifference = Math.floor(daysDifference / 30);
    return `${monthsDifference} месяцев назад, ${format(date, 'HH:mm')}`;
  }

  return `${yearsDifference} лет назад, ${format(date, 'HH:mm')}`;
};
