import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import "@/assets/index.css";
import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";
import router from "@/router/index.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
