import './App.css';

// components
import Profile from './components/Profile';
import UserList from './components/UserList'

// context
import UserState from './context/user/UserState'

function App() {
  return (
    <>
      <UserState>
        <Profile />
        <UserList />
      </UserState>
    </>
  );
}

export default App;
