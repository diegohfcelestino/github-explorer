import { useState, useEffect } from "react";
import { searchProfile } from "../../services/api";
import { IconUser } from "../../services/icons";
import "./profile.scss";

export function Profile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    searchProfile().then((response) => {
      setProfile(response);
    });
  }, []);
  console.log("profile", profile);

  return (
    <>
      <h1 className="name-profile">{profile.name}</h1>
      <div className="container profile">
        <div className="image-profile">
          <img src={profile.avatar_url} alt="profile" className="sobreFoto" />
        </div>
        <div className="description-profile">
          <div className="flex">
            <IconUser style={{ width: 6 }} />
            <p>Bio: {profile.bio}</p>
          </div>
          <p>Localização: {profile.location}</p>
          <p>Twitter: {profile.twitter_username}</p>
          <p>Repositórios públicos: {profile.public_repos}</p>
          <p>Seguindo: {profile.following}</p>
          <p>Seguidores: {profile.followers}</p>
        </div>
      </div>
    </>
  );
}
