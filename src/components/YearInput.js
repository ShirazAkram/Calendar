import React, { useState } from 'react'

function YearInput({ selectedYear, setSelectedYear }) {

    const [editing, setEditing] = useState(false);
    const [newYear, setNewYear] = useState(selectedYear);

    const handleDoubleClick = () => {
        setEditing(true);
    };

    const handleChange = (e) => {
        setNewYear(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setSelectedYear(parseInt(newYear));
            setEditing(false);
        }
    };


  return (
    <div>
       {!editing ?(
           <span id='year' onDoubleClick={handleDoubleClick}>{selectedYear}</span>
        ) : (
            <input
                id='year-text-box'
                type='text'
                value={newYear}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onBlur={() => setEditing(false)}
                autoFocus
            />   
        )}
        
    </div>
  )
}

export default YearInput

