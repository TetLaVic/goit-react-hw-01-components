import './App.css';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

function App() {
  return (
    <div className="App">
      <h2>Task 1: Profile</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task 2: Statistics</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} />; */}
      <h2>Task 3: Friend List</h2>
      <FriendList friends={friends} />
      <h2>Task 4: Transaction History</h2>
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
