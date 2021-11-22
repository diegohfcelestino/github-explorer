import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

import "./navstyle.scss";
import { useAuth } from "../../context/Auth";

export function NavBar() {
  const { signOut, user } = useAuth();
  const [collapse, setCollapse] = useState(false);
  const userMetadata = user.user_metadata;

  async function handleSignOut() {
    //encerra a sessão do usuário e apaga a sessionStorage
    sessionStorage.removeItem("user");
    await signOut();
  }

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <nav
      className="navbar fixed-top navbar-light"
      style={{ backgroundColor: "#3d2574" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler navbar-toggler-right dropdown"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => handleCollapse()}
        >
          <div className={collapse ? "hamburguer open" : "hamburguer"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="dataUser">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://github.com/${userMetadata.user_name}`}
          >
            <p>{userMetadata.user_name}</p>
          </a>
          <img
            className="navbar-brand"
            src={userMetadata.avatar_url}
            alt={userMetadata.user_name}
          />
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <>
              <li className="nav-item">
                <Link
                  className={collapse ? "nav-link text" : "nav-link"}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={collapse ? "nav-link text" : "nav-link"}
                  to="/search-users"
                >
                  Pesquisar
                </Link>
              </li>
            </>
          </ul>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={collapse ? "nav-link text" : "nav-link"}
                onClick={() => handleSignOut()}
                to="/"
              >
                <FaSignOutAlt /> Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
