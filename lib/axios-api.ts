import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/"
    : "https://p-for-pro.vercel.app/api/";

export const api = axios.create({
  baseURL,
});
