import "./schedule.css"
import { useEffect, useState } from "react";

const WeeklyCalendar = () => {
  const [dates, setDates] = useState([]);

  const [schedule, setSchedule] = useState("current day")

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const today = new Date();
    const totalDays = [];
    
    for (let i = 0; i <= 14; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);

      totalDays.push(nextDay);
    }

    setDates(totalDays);
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const cilckDayOfWeek = (day) => {
    setSchedule(formatDate(day))
  }

  return (
    <div>
      <h1>Scheduler</h1>
      <ul className="date-list">
        {dates.map((day, index) => (
            <div className="date-list-block" onClick={() => cilckDayOfWeek(day)}>
                <li key={index}>{String(day.getDate()).padStart(2, "0")}</li>
            </div>
        ))}
      </ul>

        <div>
            <h2>{schedule}</h2>
        </div>

    </div>
  );
};

export default WeeklyCalendar;
