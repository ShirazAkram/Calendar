import React from 'react'

function MonthDropdown({ selectedMonth, setSelectedMonth }) {
    const months = [
        'January','February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const handleChange = (e) => {
        setSelectedMonth(parseInt(e.target.value));
    };


  return (
    <div>
      <select id='month' value={selectedMonth} onChange={handleChange}>
        {months.map((month, index) => (
            <option key={index} value={index}>{month}</option>
        ))}
      </select>
    </div>
  )
}

export default MonthDropdown
