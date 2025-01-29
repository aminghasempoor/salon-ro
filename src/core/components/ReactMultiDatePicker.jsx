"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import moment from "jalali-moment";
import { useLocale } from "next-intl";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import en from "react-date-object/locales/gregorian_en";
export default function ReactMultiDatePicker({ value, onChange, placeholder }) {
    const locale = useLocale();
    const [selectedDate, setSelectedDate] = useState(value);

    useEffect(() => {
        setSelectedDate(value);
    }, [locale, value]);
    const handleDateChange = (date) => {
        let formattedDate;
        if (locale === "fa") {
            formattedDate = date ? moment(date).locale("fa").format("YYYY/MM/DD") : "";
        } else {
            formattedDate = date ? moment(date).locale("en").format("DD/MM/YYYY") : "";
        }
        setSelectedDate(formattedDate);
        onChange(formattedDate);
    };

    const calendar = locale === "fa" ? persian : gregorian;
    const calendarLocale = locale === "fa" ? persian_fa : en;

    return (
        <div style={{ direction: locale === "fa" ? "rtl" : "ltr" }}>
            <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                calendar={calendar}
                locale={calendarLocale}
                placeholder={placeholder}
                format={locale === "fa" ? "YYYY/MM/DD" : "DD/MM/YYYY"}
                calendarPosition="bottom-right"
                containerStyle={{
                    width: "100%",
                }}
                style={{
                    height: "2.5rem",
                    width: "100%",
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                    padding: "0.5rem",
                }}
            />
        </div>
    );
}
