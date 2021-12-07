import React, { useEffect, useState } from "react";
import { Form } from "rsuite";
import { searchUsersList } from "../../services/api";
import { TextField } from "../TextField/TextField";
import "./search.scss";

export function Search() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState({});

  console.log("USUÁRIO", userName);
  console.log("DADOSUSUARIO", userData);

  function handleChange(event) {
    console.log("event", event);
    setUserName(event);
  }

  // function handleSubmit(event) {
  //   alert("Um nome foi enviado: " + userName);
  //   event.preventDefault();
  // }

  useEffect(() => {
    searchUsersList(userName).then((response) => {
      setUserData(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  return (
    <div className="search">
      <Form>
        <TextField
          width="100%"
          label="Pesquisar usuário"
          name="users"
          placeholder="Insira o usuário"
          onChange={handleChange}
        />
      </Form>
      <h1>Usuário</h1>
      <ul className="users-list">
        <li key={userData?.login}>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            <img src={userData?.avatar_url} alt={userData?.name} />
            {userData?.email}
          </a>
        </li>
      </ul>
    </div>
  );
}
