import { useState, useEffect } from "react";
import { handleRepositoryList, searchProfile } from "../../services/api";
import "./repository.scss";
import { useAuth } from "../../context/Auth";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  const [profile, setProfile] = useState([]);
  const { user } = useAuth();
  const userName = user.user_metadata.user_name;

  useEffect(() => {
    searchProfile().then((response) => {
      setProfile(response);
    });
  }, []);
  console.log("profile", profile);

  useEffect(() => {
    handleRepositoryList().then((response) => {
      setRepositories(response);
    });
  }, [userName, user]);

  return (
    <>
      <h1 className="name-profile">{profile.name}</h1>
      <div className="container profile">
        <div className="image-profile">
          <img src={profile.avatar_url} alt="profile" className="sobreFoto" />
        </div>
        <div className="description-profile">
          <p>Bio: {profile.bio}</p>
          <p>Localização: {profile.location}</p>
          <p>Twitter: {profile.twitter_username}</p>
          <p>Repositórios públicos: {profile.public_repos}</p>
          <p>Seguindo: {profile.following}</p>
          <p>Seguidores: {profile.followers}</p>
        </div>
      </div>
      <div className="repository-list">
        <h2 className="title-list">Lista de repositórios</h2>
        <ul className="users-list">
          {repositories?.map((repository) => {
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
