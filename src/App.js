import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Task1Page from './Task1Page';
import Task2Page from './Task2Page';
import Task3Page from './Task3Page';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task1" element={<Task1Page />} />
        <Route path="/task2" element={<Task2Page />} />
        <Route path="/task3" element={<Task3Page />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
