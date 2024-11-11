// src/components/board/board.js

import React, { useState, useEffect, useMemo } from 'react';
import { fetchTickets } from '../../service/api/api';
import { groupTickets, sortTickets } from '../../util';
import Headers from '../header/header';
import GroupedTickets from '../groupedtickets/groupetickets';
import './board.css';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const data = await fetchTickets();
        setTickets(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load tickets');
        setLoading(false);
      }
    };
    loadTickets();
  }, []);

  const sortedGroupedTickets = useMemo(() => {
    const sortedTickets = sortTickets(tickets, sortBy);
    return groupTickets(sortedTickets, groupBy);
  }, [tickets, groupBy, sortBy]);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="kanban-board">
      <Headers setGroupBy={setGroupBy} setSortBy={setSortBy} groupBy={groupBy} sortBy={sortBy} />
      <div className="kanban-columns">
        {Object.keys(sortedGroupedTickets).map((key) => (
          <GroupedTickets key={key} title={key} tickets={sortedGroupedTickets[key]} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
