import { URL } from "../settings.js";

const getApiData = async () => {
  try {
    const resp = await fetch(`${URL}/users`);
    const result = await resp.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const postApiData = async (data) => {
  try {
    const resp = await fetch(`${URL}/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const result = await resp.json();
    return result;
  } catch (error) {
    console.error(`Error fetch post: ${error}`);
  }
};

const deleteApiData = async (id) => {
  try {
    const response = await fetch(`${URL}/user/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(`Error fetch delete: ${error}`);
  }
};

const putApiData = async (id, newRow) => {
  try {
    const response = await fetch(`${URL}/user/${id}`, {
      method: "PUT",
      body: JSON.stringify(newRow),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(`Error fetch put: ${error}`);
  }
};

export default { getApiData, postApiData, deleteApiData, putApiData };
