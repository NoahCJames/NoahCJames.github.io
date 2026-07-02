import React from 'react';
import './StatusBadge.css';

const StatusBadge = () => {
  return (
    <div className="status-badge-container">
      <div className="status-dot"></div>
      <span className="status-text">Seeking Summer 2027 Internships</span>
    </div>
  );
};

export default StatusBadge;