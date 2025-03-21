import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import PanelView from "@/views/Admin/PanelView.vue";
import MembersView from "@/views/Admin/MembersView.vue";
import SocialsView from "@/views/Admin/SocialsView.vue";
import AboutView from "@/views/Admin/AboutView.vue";
import AddMemberView from "@/views/Admin/AddMemberView.vue";
import AddSocialView from "@/views/Admin/AddSocialView.vue";

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
    {
      path: "/admin/social-links",
      name: "socials",
      component: SocialsView,
    },
    {
      path: "/admin/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/admin/add-member",
      name: "add-member",
      component: AddMemberView,
    },
    {
      path: "/admin/add-social",
      name: "add-social",
      component: AddSocialView,
    },
  ],
});

export default router;
