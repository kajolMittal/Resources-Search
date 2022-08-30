import axios from "axios";

const api = axios.create({
  baseURL: "https://api.publicapis.org"
});
// API setup for calling animals
export async function fetchData(filter) {
  const { data } = await api.get(`/entries?Description=${filter}`);

  console.log("entries", data?.entries);
  return data?.entries;
}
