import React, {useEffect, useState} from 'react';
import useCalendar from "@/hooks/useCalendar.ts";
import dayjs from "dayjs";


const Calendar: React.FC = () => {
    const {calendarData, year, month, Up, Down} = useCalendar();
    useEffect(() => {
        console.log(calendarData);
    }, [calendarData]);
    const ContainerStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
    }
    const CalendarStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(7, 1fr)",
        height: "100%",
        width: "100%",
    }
    return (
        <div style={ContainerStyle}>
            <header>
                <button onClick={Down}>{"<"}</button>
                <button onClick={Up}>{">"}</button>
                <p>{year}</p>
                <p>{month}</p>
            </header>
            <section style={CalendarStyle}>
                {calendarData && calendarData.map((week, i) =>
                    week.map((day, j) => {
                        return (
                            <div key={(i+1)*(j+1)}>
                                {day}
                            </div>
                        )
                    }))}
            </section>
        </div>
    )
}

export default Calendar;