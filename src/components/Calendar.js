import React from 'react'

function Calendar( {selectedMonth, selectedYear }) {

    const getDaysInMonth = (month, year) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    // const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);


    const renderCalendar = () => {
    
        const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
        const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
        // const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

        const startingDay = firstDayOfMonth.getDay();
      
        const rows = [];
      
        let currentDay = 1;
      
        for (let i = 0; i < 6; i++) {
          const cells = [];
      
          for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < startingDay) || currentDay > lastDayOfMonth.getDate()) {
              cells.push(<td key={j}></td>);
            } else {
              cells.push(<td key={j}>{currentDay}</td>);
              currentDay++;
            }
          }
          rows.push(<tr key={i}>{cells}</tr>);
        }
      
        return rows;
    };
      


  return (
    <div className='calendar-container'>
      <table >
        <thead>
            <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
            </tr>
        </thead>

        <tbody>
            {renderCalendar()}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar


