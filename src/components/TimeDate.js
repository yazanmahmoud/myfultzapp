import React, { useState, useEffect } from 'react';

const TimeDate = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: '1.5em', marginBottom: '10px' }}>
      {dateTime.toLocaleDateString()}
       <br></br>
      {dateTime.toLocaleTimeString()}
    </div>
  );
};

export default TimeDate;
