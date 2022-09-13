import { defineStore } from "pinia";

export const useLocalStorageStore = defineStore("localStorage", {
  state: () => {
    return {
      token: null,
    };
  },
});
