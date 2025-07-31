import React from 'react';
import useCalendar from "@/hooks/useCalendar.ts";
import DayButton from '@/components/Calendar/DayButton.tsx'

interface CalendarProps {
    height?: number | string;
    width?: number | string;
}
const Calendar: React.FC<CalendarProps> = ({height, width}) => {
    const {data, year, month, day, setDay, Up, Down} = useCalendar();

    const ContainerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        width: width || "100%",
        height: height || "100%",
    }
    const HeaderStyle: React.CSSProperties = {
        height: "5rem",
        width: "100%",
    }
    const CalendarStyle: React.CSSProperties = {
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(6, 1fr)",
        width: "100%",
    }
    return (
        <article style={ContainerStyle}>
            <header style={HeaderStyle}>
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
                                    if (cDay === null) return;
                                    if (cDay !== day) setDay(cDay);
                                }}
                            />
                        )
                    }))}
            </section>
        </article>
    )
}

export default Calendar;