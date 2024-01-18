
import React, { useState } from 'react';
import '../styles/App.css';
import YearInput from './YearInput';
import Calendar from './Calendar';

import MonthDropdown from './MonthDropdown';


const App = () => {

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());


  const changeMonth = (input) => {
    const newMonth = selectedMonth + input;
    if (newMonth < 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else if (newMonth > 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(newMonth);
    }
  }

  const changeYear = (input) => {
    setSelectedYear(selectedYear + input)
  }

  



  return (
    <div id="main">
      <h1 id='heading'>Calendar</h1>
      
      <MonthDropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <YearInput selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      <Calendar selectedMonth={selectedMonth} selectedYear={selectedYear} />
      
      


      <div className='change-btn-arrow'>
        <button onClick={() => changeYear(-1)}> &lt;&lt; </button>
        <button onClick={() => changeMonth(-1)}> &lt; </button>
        <button onClick={() => changeMonth(1)}> &gt; </button>
        <button onClick={() => changeYear(1)}> &gt;&gt; </button>

      </div>
    </div>
  )
}


export default App;

