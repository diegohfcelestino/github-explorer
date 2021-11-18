import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/",
});

export function handleRepositoryList() {
  const auth = sessionStorage.getItem("user");
  const url = `https://api.github.com/users/${auth}/repos`; //?sort=language=1 -> utilizado para fazer paginacao

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}

export function searchUsersList(userName) {
  const url = `https://api.github.com/users/${userName}`;

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}

export function searchRepositoryList(userName) {
  const url = `https://api.github.com/users/${userName}/repos`;

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}

export function searchOrgsList(userName) {
  const url = `https://api.github.com/users/${userName}/orgs`;

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}

export function followersList(userName) {
  const url = `https://api.github.com/users/${userName}/followers`;

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}
