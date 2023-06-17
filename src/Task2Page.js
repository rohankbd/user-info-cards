// In Task2Page.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Task2Page() {
  const location = useLocation();
  const { numCircles } = location.state;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://random-data-api.com/api/users?size=${numCircles}`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, [numCircles]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {users.map((user) => (
          <Link key={user.id} to={`/task3/${user.id}`}>
            <div className="card">
              <img src={user.avatar} alt="Avatar" />
              <p>ID: {user.id}</p>
              <p>Full Name: {user.first_name} {user.last_name}</p>
              <p>Title: {user.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Task2Page;
