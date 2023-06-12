import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";
import ErrorModal from "./UI/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const addUser = (user) => {
    setUsers((currState) => [...currState, user]);
  };

  const handleSetError = (title, message) => {
    setError({ title, message });
  };

  return (
    <div>
      <AddUser onAddUser={addUser} onSetError={handleSetError} />
      <UsersList users={users} />
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={() => setError(null)}
        />
      )}
    </div>
  );
}

export default App;
