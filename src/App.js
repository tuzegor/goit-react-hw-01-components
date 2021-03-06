import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import transactions from './transactions.json';
import friends from './friends.json';
import user from './user.json';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <div className="AppItem">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
