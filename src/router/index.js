import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import PanelView from "@/views/Admin/PanelView.vue";
import MembersView from "@/views/Admin/MembersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/admin",
      name: "admin",
      component: PanelView,
    },
    {
      path: "/admin/members",
      name: "members",
      component: MembersView,
    },
  ],
});

export default router;
