// src/util.js

export const groupTickets = (tickets, groupBy) => {
  return tickets.reduce((groups, ticket) => {
    const key = ticket[groupBy];
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(ticket);
    return groups;
  }, {});
};

export const sortTickets = (tickets, sortBy) => {
  return [...tickets].sort((a, b) => {
    if (sortBy === 'priority') return b.priority - a.priority;
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    return 0;
  });
};
