import { useEffect, useRef, useState } from "react";
import arrow_right from "../../../assets/profile/arrow_date_right.svg"
import arrow_left from "../../../assets/profile/arrow_date_left.svg"
import { getCalendarDays } from "../../../utils/service";
import calendar from "../../../assets/profile/calendar.svg"

export default function DateInput({value, onBirthdayChange, errors}){
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [view, setView] = useState("calendar");
    const [isOpen, setIsOpen] = useState(false);
    const calendarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
  
    const days = getCalendarDays(currentYear, currentMonth);
  
    const handleMonthChange = (direction) => {
        if (direction === "prev") {
          if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((prev) => prev - 1);
          } else {
            setCurrentMonth((prev) => prev - 1);
          }
        } else {
          if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((prev) => prev + 1);
          } else {
            setCurrentMonth((prev) => prev + 1);
          }
        }
    };
  
    const handleYearSelect = (year) => {
        setCurrentYear(year);
        setView("calendar");
    };
  
    const handleDateSelect = (day) => {
        setSelectedDate(new Date(currentYear, currentMonth, day));
    };
  
    const handleOk = () => {
        if (selectedDate) {
            onBirthdayChange(selectedDate);
        }
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };
  
    return (
        <div className="date-input">
            <label htmlFor="date-of-birth" className="date-label">
                Date of Birth
            </label>
            <input
                type="text"
                value={
                    value
                        ? new Date(value).toLocaleDateString("en-US", {
                              month: "2-digit",
                              day: "2-digit",
                              year: "numeric",
                          })
                        : ""
                }
                placeholder="mm/dd/yyyy"
                readOnly
                className="input"
                onClick={() => setIsOpen(true)}
            />
            <img className="calendar-icon" src={calendar} alt="calendar-icon" />
        {isOpen && (
        <div className="calendar" ref={calendarRef}>
            {view === "calendar" ? (
                <>
                <div className="calendar__header-date">
                    <button  
                        type="button"
                        className="calendar__header-date__btn"
                        onClick={() => handleMonthChange("prev")}
                    >
                        <img src={arrow_left} alt="left_icon" />
                    </button>
                        <span 
                            className="calendar__header-date__description"
                            onClick={() => setView("yearPicker")}
                        >
                            {new Intl.DateTimeFormat("en-US", {
                                month: "long",
                                year: "numeric",
                            }).format(new Date(currentYear, currentMonth))}
                        </span>
                    <button 
                        type="button"
                        className="calendar__header-date__btn"
                        onClick={() => handleMonthChange("next")}
                    >
                        <img src={arrow_right}  alt="right_icon"/>
                    </button>
                </div>
                <div className="calendar__days">
                    {days.map((day, index) => (
                        <button
                            type="button"
                            key={index}
                            onClick={() => day.currentMonth && handleDateSelect(day.day)}
                            className={`calendar__days__btn ${day.currentMonth ? "calendar__days__btn__current" : "calendar__days__btn__other"} ${
                            selectedDate?.getDate() === day.day && day.currentMonth ? "selected" : ""
                            }`}
                        >
                            <span 
                                className={`calendar__days__description 
                                ${day.currentMonth ? "current-month" : "other-month"}
                                ${selectedDate?.getDate() === day.day && day.currentMonth ? "selected-day" : ""}`}
                            >
                                {day.day}</span>
                        </button>
                    ))}
                </div>
            </>
            ) : (
            <div className="calendar__year">
                <div className="calendar__year__list">
                    {Array.from({ length: 60 },(_, i) => new Date().getFullYear() - 59 + i
                    ).map((year) => (
                        <button
                            className="calendar__year__list__btn"
                            key={year}
                            onClick={() => handleYearSelect(year)}
                            disabled={year > new Date().getFullYear()}
                        >
                            <span className="calendar__year__list__description">{year}</span>
                        </button>
                    ))}
              </div>
            </div>
            )}
            <div className="actions">
                <button type="button" className="actions__btn" onClick={handleOk}>OK</button>
                <button type="button" className="actions__btn" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
        )}
      </div>
    );
}