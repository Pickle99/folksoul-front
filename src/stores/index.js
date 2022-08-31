import { createPinia } from "pinia";
import { useLocalStorageStore } from "@/stores/useLocalStorageStore.js";
const store = createPinia({
  useLocalStorageStore,
});

export default store;
