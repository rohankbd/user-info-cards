import React, { useState } from 'react';
import './styles.css';

function Task1Page1() {
  const [counter, setCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('yellow');
  const [duplicatedCircles, setDuplicatedCircles] = useState([]);

  function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'yellow', 'pink', 'teal', 'gray', 'brown'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function handleButtonClick() {
    setCounter(counter + 1);
    setBackgroundColor(getRandomColor());
  }

  function handleDuplicateClick() {
    if (duplicatedCircles.length < 10) {
      const newCircle = { id: Date.now(), counter: 0, backgroundColor: backgroundColor };
      setDuplicatedCircles([...duplicatedCircles, newCircle]);
    }
  }

  return (
    <div className="container">
      <div className="circle-container">
        <div
          style={{
            width: '10vw',
            height: '10vw',
            backgroundColor: backgroundColor,
            borderRadius: '50%',
            margin: '5px',
          }}
        ></div>
        {duplicatedCircles.slice(0, 9).map((circle, index) => (
          <div
            key={circle.id}
            style={{
              width: '10vw',
              height: '10vw',
              backgroundColor: circle.backgroundColor,
              borderRadius: '50%',
              margin: '5px',
            }}
          ></div>
        ))}
        {duplicatedCircles.length < 9 && (
          <div
            style={{
              width: '10vw',
              height: '10vw',
              backgroundColor: 'transparent',
              borderRadius: '50%',
              margin: '5px',
            }}
          ></div>
        )}
      </div>
      <div className="content">
        <p>Counter: {counter}</p>
        <p>Background Color: {backgroundColor}</p>
        <button onClick={handleButtonClick}>Increase Counter and Change Background Color</button>
        <button onClick={handleDuplicateClick}>Duplicate Circle</button>
      </div>
    </div>
  );
}

export default Task1Page1;
