import { client } from "./client";

export const getHelloWorld = () => {
  return client.get("/rest/apiv1/20220116");
};
