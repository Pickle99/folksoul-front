import { defineStore } from "pinia";

export const useMembersStore = defineStore("members", {
  state: () => {
    return {
      members: [],
    };
  },
});
