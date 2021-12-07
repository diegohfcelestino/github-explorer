import { useState, useEffect } from "react";
import { repositoryListUsers } from "../../services/api";

export function ListRepositoryUser({ userName }) {
  const [userRepositories, setUserRepositories] = useState([]);

  useEffect(() => {
    repositoryListUsers(userName).then((response) => {
      setUserRepositories(response);
    });
  }, [userName]);

  return (
    <>
      <div className="repository-list">
        <h2 className="title-list">Lista de repositórios</h2>
        <ul className="users-list">
          {userRepositories?.map((repository) => {
            return (
              <li key={repository.name} className="item-list">
                <h5>Nome do Repositório: {repository.name}</h5>
                <p>Descrição: {repository.description}</p>
                <p>Linguagem: {repository.language}</p>
                <p>Criado em: {repository.created_at}</p>
                <p>Forks feitos: {repository.forks}</p>
                <p>Estrelas: {repository.stargazers_count}</p>
                <p>Branch padrão: {repository.default_branch}</p>

                <a href={repository.html_url} target="_blank" rel="noreferrer">
                  Acessar repositórios
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
