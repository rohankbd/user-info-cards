import React, { useState } from 'react';

function Task1Page() {
  const [counter, setCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('yellow');

  const handleIncreaseCounter = () => {
    setCounter(counter + 1);
    setBackgroundColor(getRandomColor());
  };

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'yellow', 'pink', 'teal', 'gray', 'brown'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '10vw',
          height: '10vw',
          backgroundColor: backgroundColor,
          borderRadius: '50%',
        }}
      ></div>
      <p style={{ margin: '10px 0' }}>Counter: {counter}</p>
      <p style={{ marginBottom: '10px' }}>Background Color: {backgroundColor}</p>
      <button onClick={handleIncreaseCounter}>Increase Counter</button>
      <button
        onClick={() => {
          setCounter(0);
          setBackgroundColor(getRandomColor());
        }}
      >
        Reset Counter and Change Background Color
      </button>
    </div>
  );
}

export default Task1Page;
