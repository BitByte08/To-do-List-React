import {useState, useEffect} from 'react';
import dayjs from "dayjs";

const useCalendar = () => {
    const [calendarData, setCalendarData] = useState<Array<Array<number>> | null>(null);
    const [year, setYear] = useState<number | null>(null);
    const [month, setMonth] = useState<number | null>(null);
    const generateCalendar = (year, month) => {
        console.log(year, month);
        const start = dayjs(`${year}-${month}-01`);
        const startDay = start.day();
        const daysInMonth = start.daysInMonth();
        const days = [];
        for (let i = 0; i < startDay; i++) days.push(null);
        for (let d = 1; d <= daysInMonth; d++) days.push(d);
        while (days.length % 7 !== 0) days.push(null);
        const weeks = [];
        for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
        return weeks;
    }
    useEffect(() => {
        if(year !== null && month !== null) setCalendarData(generateCalendar(year, month));
    }, [year, month]);
    useEffect(() => {
        setYear(dayjs().$y);
        setMonth(dayjs().$M);
    }, [setYear, setMonth]);
    const Up = () => {
        setMonth(month + 1);
        if(month > 12){
            setMonth(1);
            setYear(year + 1);
        }
    }
    const Down = () => {
        setMonth(month - 1);
        if(month == 0) {
            setMonth(12);
            setYear(year - 1);
        }
    }
    return {
        calendarData,
        year,
        month,
        Up,
        Down,
    }
}

export default useCalendar;