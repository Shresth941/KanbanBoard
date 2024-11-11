
import React from 'react';
import './controls.css';

const Controls = ({ setGroupBy, setSortBy}) => {
  return (
    <div className="controls">
      <button onClick={() => setGroupBy('status')}>Group by Status</button>
      <button onClick={() => setGroupBy('userId')}>Group by User</button>
      <button onClick={() => setGroupBy('priority')}>Group by Priority</button>
      <button onClick={() => setSortBy('priority')}>Sort by Priority</button>
      <button onClick={() => setSortBy('title')}>Sort by Title</button>
    </div>
  );
};

export default Controls;
