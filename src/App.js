
import { createContext, useState } from 'react';
import './App.css';
import Login from './component/Login/Login';
export const UserContext=createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Login></Login>
    </UserContext.Provider>
  );
}

export default App;
