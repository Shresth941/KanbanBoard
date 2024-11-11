
import React from 'react';
import Ticket from '../ticket/ticket';
import './groupedticket.css';

const iconPaths = {
 ' Backlog': '../../Untitled/icons_FEtask/Backlog.svg',
  'High Priority': '../../Untitled/icons_FEtask/Img - High Priority.svg',
  'Medium Priority': '../../Untitled/icons_FEtask/Img - Medium Priority.svg',
  'Low Priority': '../../Untitled/icons_FEtask/Img - Low Priority.svg',
  'No Priority': '../../Untitled/icons_FEtask/No-priority.svg',
  'Urgent Priority': '../../Untitled/icons_FEtask/SVG - Urgent Priority colour.svg',
  'In progress': '../../Untitled/icons_FEtask/in-progress.svg',
  'Todo': '../../Untitled/icons_FEtask/To-do.svg',
  'Cancelled': '../../Untitled/icons_FEtask/Cancelled.svg'
};

const GroupedTickets = ({ title, tickets }) => {
  const iconSrc = iconPaths[title] || '';

  return (
    <div className="grouped-tickets">
      <div className="grouped-tickets-header">
        {<img src={iconSrc} alt={`${title} icon`} className="group-icon" />}
        
        <h3>{title}</h3>
        
      </div>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    
    </div>
  );
};

export default GroupedTickets;
