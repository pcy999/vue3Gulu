/*
 * @Description:项目程序入口
 * @Autor: pcy
 * @Date: 2022-03-03 11:30:32
 * @LastEditTime: 2022-03-03 15:25:42
 */
import { createApp } from "vue";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    { path: "/doc", component: Doc },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
