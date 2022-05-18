import HomeComponent from "./components/HomeComponent.vue";
import SignUp from "./components/SignUp.vue";
import LogOut from "./components/LogOut.vue";
import LogIn from "./components/LogIn.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { name: "HomeComponent", component: HomeComponent, path: "/" },
  { name: "SignUp", component: SignUp, path: "/signup" },
  { name: "LogIn", component: LogIn, path: "/login" },

  { name: "LogOut", component: LogOut, path: "/logout" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
