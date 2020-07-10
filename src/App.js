import React from 'react';
import Profile from './components/task1/Profile';
import user from './components/task1/user.json';
import Stats from './components/task2/statistical-data.json';
import Statistics from './components/task2/Statistics';
import Friends from './components/task3/friends.json';
import FriendsList from './components/task3/FriendList';
import transactions from './components/task4/transactions.json';
import TransactionHistory from './components/task4/TransactionHistory';

const App = () => {
  return (
    <div>
      <h2>Task 1 - Profile</h2>
      <Profile {...user} />

      <h2>Task 2 - Statistics</h2>
      <Statistics title="Upload stats" stats={Stats} />

      <h2>Task 3 - Friends List</h2>
      <FriendsList friends={Friends} />

      <h2>Task 4 - Transaction History</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
