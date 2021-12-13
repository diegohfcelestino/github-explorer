import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export function handleRepositoryList() {
  const auth = localStorage.getItem('user');
  const url = `https://api.github.com/users/${auth}/repos?per_page=100`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
}

export function searchProfile() {
  const auth = localStorage.getItem('user');
  const url = `https://api.github.com/users/${auth}`;

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}

export function searchUsersList(userName) {
  const url = `https://api.github.com/users/${userName}`;
  //const url = `https://api.github.com/search/users?q=${userName}`; para pesquisar varios usuários

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}

export function repositoryListUsers(userName) {
  const url = `https://api.github.com/users/${userName}/repos?per_page=100`;

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}

export function listCommitsRepository(userName, repo) {
  const url = `https://api.github.com/repos/${userName}/${repo}/commits`;

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
