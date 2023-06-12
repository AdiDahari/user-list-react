import React, { useState } from "react";

import classes from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return props.onSetError(
        "Missing Fields",
        "One or more of the fields are missing"
      );

    if (+enteredAge < 1)
      return props.onSetError("Invalid Age", "The age must be greater than 0");

    props.onAddUser({
      id: Math.random().toString(),
      name: enteredUsername,
      age: enteredAge,
    });

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredUsername}
          onChange={(e) => setEnteredUsername(e.target.value)}
          id="username"
          type="text"
        />
        <label htmlFor="age">Age</label>
        <input
          value={enteredAge}
          onChange={(e) => setEnteredAge(e.target.value)}
          id="age"
          type="number"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
