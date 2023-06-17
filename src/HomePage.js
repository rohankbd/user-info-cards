import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='container'>
      <h1>Welcome to the Homepage</h1>
      <ul>
        <li>
          <Link to="/task1">Task 1</Link>
        </li>
        <li>
          <Link to="/task2">Task 2</Link>
        </li>
        <li>
          <Link to="/task3">Task 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
