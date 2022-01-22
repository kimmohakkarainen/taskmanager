import { client } from "./client";

export const getMenu = () => {
  return client.get("/api/v1/menu");
};
