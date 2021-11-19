import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";
import { searchUsersList } from "../../services/api";
import SearchInput from "./SearchInput";
import "./styles.scss";

export function Search() {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();
  const userName = user.user_metadata.user_name;
  const [text, setText] = useState("");

  useEffect(() => {
    searchUsersList().then((response) => {
      setUsers(response);
    });
    console.log("user", user);
    console.log("users", users);
  }, [users, user]);

  return (
    <div className="search">
      <h1>Usuários</h1>
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {text && !users && <span>Carregando...</span>}
      {users && (
        <ul className="users-list">
          {users.map((userName) => (
            <li key={users.login}>
              <img src={userName.avatar_url} alt={userName.name} />
              {userName.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
