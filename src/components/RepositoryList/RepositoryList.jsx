import { useState, useEffect } from "react";
import {
  handleRepositoryList,
  listCommitsRepository,
} from "../../services/api";
import "./repository-list.scss";
import { useAuth } from "../../context/Auth";
import { Pagination } from "../Pagination/Pagination";
import { SelectPagination } from "../Pagination/SelectPagination";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  const { user } = useAuth();
  const userName = user.user_metadata.user_name;

  const [itensPerPage, setItensPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(repositories.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentRepositories = repositories.slice(startIndex, endIndex);

  useEffect(() => {
    handleRepositoryList().then((response) => {
      let newResponse = [];
      // eslint-disable-next-line array-callback-return
      response.map((item) => {
        listCommitsRepository(userName, item.name).then((res) => {
          item.totalCommits = res.length;
        });
        newResponse.push(item);
      });
      console.log("segundoResponse", response);
      setRepositories(response);
    });
  }, [userName, user]);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  return (
    <>
      {repositories.length ? (
        <div className="repository-list">
          <h3 className="title-list">Lista de repositórios</h3>
          <SelectPagination
            itensPerPage={itensPerPage}
            setItensPerPage={setItensPerPage}
          />
          <ul className="users-list">
            {currentRepositories?.map((repository) => {
              return (
                <li key={repository.name} className="item-list">
                  <h5>Nome do Repositório: {repository.name}</h5>
                  <p>Descrição: {repository.description}</p>
                  <p>Linguagem: {repository.language}</p>
                  <p>Criado em: {repository.created_at}</p>
                  <p>Forks feitos: {repository.forks}</p>
                  <p>Estrelas: {repository.stargazers_count}</p>
                  <p>Branch padrão: {repository.default_branch}</p>
                  <p>Commits: {repository.totalCommits}</p>

                  <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Acessar repositórios
                  </a>
                </li>
              );
            })}
          </ul>
          <Pagination
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      ) : null}
    </>
  );
}
