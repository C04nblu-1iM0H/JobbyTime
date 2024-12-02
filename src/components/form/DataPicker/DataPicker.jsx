import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { enUS } from "date-fns/locale";
import "./data_picker.scss";

export default function DataPicker(){
    const [selectedDate, setSelectedDate] = useState(null);

    registerLocale("custom-en", {
        ...enUS,
        options: {
          ...enUS.options,
          weekStartsOn: 0,
          weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // Сокращенные дни
        },
    });

  return (
    <div className="datepicker-container">
        <label htmlFor="date-of-birth" className="datepicker-label">
            Date of Birth
        </label>
        <DatePicker
            id="date-of-birth"
            locale="custom-en"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="mm/dd/yyyy"
            showPopperArrow={false}
            className="datepicker-input"
        />
    </div>
  );
}