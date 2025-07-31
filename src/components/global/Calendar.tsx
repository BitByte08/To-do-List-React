import React, {useEffect, useState} from 'react';
import useCalendar from "@/hooks/useCalendar.ts";
import DayButton from '@/components/Calendar/DayButton.tsx'


const Calendar: React.FC = () => {
    const {data, year, month, day, setDay, Up, Down} = useCalendar();

    const ContainerStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
    }
    const CalendarStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(6, 1fr)",
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
                {data && data.map((cWeek, i) =>
                    cWeek.map((cDay, j) => {

                        return (
                            <DayButton
                                key={`${i}-${j}`}
                                value={cDay}
                                isSelected={cDay === day}
                                onClick={() => {
                                    if (cDay !== day) setDay(cDay);
                                }}
                            />
                        )
                    }))}
            </section>
        </div>
    )
}

export default Calendar;