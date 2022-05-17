import HomeComponent from "./components/HomeComponent.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { name: "HomeComponent", component: HomeComponent, path: "/" },
  { name: "SignUp", component: SignUp, path: "/signup" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
