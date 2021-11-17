import { RepositoryItem } from "../../components/RepositoryItem";
import { useState, useEffect } from "react";
import { handleRepositoryList } from "../../services/api";
import "./repository.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    sessionStorage.setItem("user", "diegohfcelestino");

    handleRepositoryList().then((response) => {
      setRepositories(response);
    });
  }, []);

  return (
    <>
      <section className="repository-list">
        <h1>Lista de repositórios</h1>
        <ul>
          {repositories?.map((repository) => {
            return (
              <RepositoryItem key={repository.name} repository={repository} />
            );
          })}
        </ul>
      </section>
    </>
  );
}
