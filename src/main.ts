import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { App } from "./App";
import { Home } from "./views/Home";
import { Chat } from "./views/Chat";

const routes = [
  {
    path: "/",
    component: Home,
  },
  { path: "/Chat", component: Chat },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
