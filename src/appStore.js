import { store } from "@risingstack/react-easy-state";
import * as api from "./api";

// use 'appStore' to fetch animals
const appStore = store({
  animals: [],
  async fetchData(filter) {
    appStore.isLoading = true;
    appStore.animals = await api.fetchData(filter);
    appStore.isLoading = false;
  }
});

export default appStore;
