import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
// import NewUsers from "./components/NewUsers/NewUsers";

const DUMMY_USERS = [
  {
    name: 'dongho',
    age: '27',
    id:'1',
  }
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
    console.log("in App.js");
    console.log(users);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
    </div>
  );
}

export default App;
