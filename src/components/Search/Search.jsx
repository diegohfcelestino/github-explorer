import React, { useEffect, useState } from "react";
import { Form } from "rsuite";
import { useAuth } from "../../context/Auth";
import { searchUsersList } from "../../services/api";
import { TextField } from "../TextField/TextField";
import "./search.scss";

export function Search() {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();
  //const [displayValue, setDisplayValue] = useState();
  const userName = user.user_metadata.user_name;

  console.log("USUÁRIO", userName);

  // function handleChange(event) {
  //   setDisplayValue(event.target.value);
  // }

  // function handleSubmit(event) {
  //   alert("Um nome foi enviado: " + userName);
  //   event.preventDefault();
  // }
  //const [text, setText] = useState("");

  useEffect(() => {
    searchUsersList().then((response) => {
      setUsers(response);
    });
    console.log("users", users);
  }, [users, user]);

  return (
    <div className="search">
      <Form>
        <TextField
          width="100%"
          label="Pesquisar usuário"
          name="users"
          placeholder="Insira o usuário"
        />
      </Form>
      <h1>Usuário</h1>
      <ul className="users-list">
        {users.map((userName) => (
          <li key={users.login}>
            <img src={userName.avatar_url} alt={userName.name} />
            {userName.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
