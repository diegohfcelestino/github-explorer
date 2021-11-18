import { RepositoryItem } from "../../components/RepositoryItem";
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
