export function formatDateDifference(updatedAt) {
    const now = Date.now(); // Текущее время в миллисекундах
    const difference = now - updatedAt; // Разница во времени в миллисекундах

    // Константы для расчёта
    const oneSecond = 1000;
    const oneMinute = 60 * oneSecond;
    const oneHour = 60 * oneMinute;
    const oneDay = 24 * oneHour;
    const oneWeek = 7 * oneDay;
    const oneMonth = 30 * oneDay; // Условный месяц из 30 дней
    const sixMonths = 6 * oneMonth;

    if (difference < oneDay) {
        // Если меньше суток, отображаем часы
        const hours = Math.floor(difference / oneHour);
        return `${hours} ${hours === 1 ? 'hour' : (hours < 5 ? 'hours' : 'hours')} ago`;
    } else if (difference < oneWeek) {
        // Если меньше недели, отображаем дни
        const days = Math.floor(difference / oneDay);
        return `${days} ${days === 1 ? 'day' : (days < 5 ? 'of the day' : 'day')} ago`;
    } else if (difference < oneMonth) {
        // Если меньше месяца, отображаем недели
        const weeks = Math.floor(difference / oneWeek);
        return `${weeks} ${weeks === 1 ? 'week' : (weeks < 5 ? 'weeks' : 'week')} ago`;
    } else if (difference < sixMonths) {
        // Если меньше полугода, отображаем месяцы и дни
        const months = Math.floor(difference / oneMonth);
        const remainingDays = Math.floor((difference % oneMonth) / oneDay);
        const monthsText = `${months} ${months === 1 ? 'month' : (months < 5 ? 'month' : 'months')}`;
        const daysText = `${remainingDays} ${remainingDays === 1 ? 'day' : (remainingDays < 5 ? 'day' : 'days')}`;
        return remainingDays > 0 ? `${monthsText} и ${daysText} ago` : `${monthsText} ago`;
    } else {
        // Если больше полугода
        const months = Math.floor(difference / oneMonth);
        if (months > 6) {
            return 'Больше полугода назад';
        }
    }
}

