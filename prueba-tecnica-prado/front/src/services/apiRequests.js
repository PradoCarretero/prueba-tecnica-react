import { URL } from "../settings.js";

const getApiData = () => {
  return fetch(`${URL}/users`)
    .then((response) => response.json())
    .catch((error) => console.error(error))
    .then((response) => {
      const result = response;
      return result;
    });
};

const postApiData = (data) => {
  return fetch(`${URL}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .catch((error) => error.log(`Error fetch post: ${error}`));
};

const deleteApiData = (id) => {
  return fetch(`${URL}/user/${id}`, {
    method: "DELETE",
  });
};

const putApiData = (id, newRow) => {
  return fetch(`${URL}/user/${id}`, {
    method: "PUT",
    body: JSON.stringify(newRow),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .catch((error) => console.log(`Error fetch put: ${error}`));
};

export default { getApiData, postApiData, deleteApiData, putApiData };
