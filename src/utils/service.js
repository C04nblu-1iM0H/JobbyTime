export const disabledScrollSteps = (start, step0, step1, step2, step3, step4, isVerificationOfPayment) =>{
    if (start  || step0 || step1 || step2 || step3 || isVerificationOfPayment || step4) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }

    return () => {
        document.body.classList.remove('no-scroll');
    };
}

export const getWords = (words) => {
    const lengthWord =  words.split("").length
    if(lengthWord > 60){
        return `${words.split("").slice(0, 60).join("")}...`;
    }else{
        return words;
    }
}


const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); // День недели первого дня
const lastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDay(); // День недели последнего дня

export const getCalendarDays = (year, month) => {
    const totalDays = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month); // 0 - Sunday, 1 - Monday, ...
    const lastDay = lastDayOfMonth(year, month);
  
    // Определяем дни предыдущего месяца
    const prevMonthDays = [];
    if (firstDay !== 0) { // Если месяц не начинается с воскресенья
        const prevMonth = month === 0 ? 11 : month - 1;
        const prevYear = month === 0 ? year - 1 : year;
        const totalPrevMonthDays = daysInMonth(prevYear, prevMonth);
  
        for (let i = totalPrevMonthDays - firstDay + 1; i <= totalPrevMonthDays; i++) {
            prevMonthDays.push({ day: i, currentMonth: false });
        }
    }
  
    // Дни текущего месяца
    const currentMonthDays = Array.from({ length: totalDays }, (_, i) => ({
        day: i + 1,
        currentMonth: true,
    }));
  
    // Определяем дни следующего месяца

    const nextMonthDays = [];
    if (lastDay !== 6) { // Если месяц не заканчивается субботой
        for (let i = 1; i <= 6 - lastDay; i++) {
            nextMonthDays.push({ day: i, currentMonth: false });
        }
    }
  
    // Комбинируем все дни
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
};

export const  formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, ""); // Удалить все, кроме цифр
    const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return digits;
    const [, areaCode, centralOfficeCode, lineNumber] = match;
    let formatted = "";
    if (areaCode) formatted += `(${areaCode}`;
    if (centralOfficeCode) formatted += `)-${centralOfficeCode}`;
    if (lineNumber) formatted += `-${lineNumber}`;
    return formatted;
  }
