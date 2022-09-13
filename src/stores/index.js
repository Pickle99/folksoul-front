import { createPinia } from "pinia";
import { useLocalStorageStore } from "@/stores/useLocalStorageStore.js";
import { useMembersStore } from "@/stores/useMembersStore.js";
const store = createPinia({
  useLocalStorageStore,
  useMembersStore,
});

export default store;
