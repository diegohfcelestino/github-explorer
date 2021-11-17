import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/",
});

export function handleRepositoryList() {
  const auth = sessionStorage.getItem("user");
  const url = `https://api.github.com/users/${auth}/repos`;

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}
