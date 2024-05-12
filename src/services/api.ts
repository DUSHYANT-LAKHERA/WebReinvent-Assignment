// src/services/api.ts
const BASE_URL = "https://reqres.in/api";

export async function signIn(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response.json();
}

export async function signUp(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

export async function productList() {
  const response = await fetch(`${BASE_URL}/unknown`, {
    method: "GET",
  });

  return response;
}
