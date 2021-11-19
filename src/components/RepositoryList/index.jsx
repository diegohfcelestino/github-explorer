import { useState, useEffect } from "react";
import { handleRepositoryList } from "../../services/api";
import "./repository.scss";
import { useAuth } from "../../context/Auth";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  const { user } = useAuth();
  const userName = user.user_metadata.user_name;

  useEffect(() => {
    handleRepositoryList().then((response) => {
      setRepositories(response);
    });
    console.log("user", user);
  }, [userName, user]);

  return (
    <>
      <section className="repository-list">
        <h1 className="title-list">Lista de repositórios</h1>
        <ul className="users-list">
          {repositories?.map((repository) => {
            return (
              <li key={repository.name} className="item-list">
                <h5>Nome do Repositório: {repository.name}</h5>
                <p>Descrição: {repository.description}</p>
                <p>Linguagem: {repository.language}</p>
                <p>Criado em : {repository.created_at}</p>
                <p>Forks feitos : {repository.forks}</p>
                <p>Branch padrão : {repository.default_branch}</p>

                <a href={repository.html_url} target="_blank" rel="noreferrer">
                  Acessar repositórios
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
