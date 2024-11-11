// src/components/ticket/ticket.js

import React from 'react';
import './ticket.css';

const Ticket = ({ ticket}) => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <h4 className="ticket-id">{ticket.id}</h4>
      </div>
      <div className="ticket-title">
        <h3>{ticket.title}</h3>
      </div>
      <div className="ticket-details">
        <div>
        <img src={'../../Untitled/icons_FEtask/3 dot menu.svg'} alt="" /> 
        </div>
      
   
        
      </div>
    </div>
  );
};

export default Ticket;
