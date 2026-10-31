import { BASE_URL } from "../config";

export const createPizza = async (pizza) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pizza),
  });
  if (!response.ok) {
    throw new Error(`Невдалося створити нову піццу: ${response.statusText}`);
  }
  return response.json();
};

export const getOnePizza = async (id) => {
  console.log(id);
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Невдалося отримати піццу: ${response.statusText}`);
  }
  return response.json();
};

export const readPizzas = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`Невдалося отримати піцци: ${response.statusText}`);
  }
  return response.json();
};

export const updatePizza = async (pizza, id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pizza),
  });
  if (!response.ok) {
    throw new Error(`Невдалося оновити піццу: ${response.statusText}`);
  }
  return response.json();
};

export const deletePizza = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Невдалося видалити піцци: ${response.statusText}`);
  }
  console.log(`DELET ${id}`);
};
