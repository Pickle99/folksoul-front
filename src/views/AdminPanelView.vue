<template>
  <h1>Hi</h1>
  <button @click="logout()" v-if="token">Log out</button>
</template>

<script>
import axios from "@/config/axios";
import { useLocalStorageStore } from "@/stores/useLocalStorageStore.js";
import { mapWritableState } from "pinia";
export default {
  computed: {
    ...mapWritableState(useLocalStorageStore, ["token"]),
  },
  methods: {
    logout() {
      axios
        .post("logout")
        .then((res) => {
          console.log(res);
          this.token = null;
          localStorage.removeItem("token");
          this.$router.push({ name: "home" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
