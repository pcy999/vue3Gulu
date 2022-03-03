/*
 * @Description:项目程序入口
 * @Autor: pcy
 * @Date: 2022-03-03 11:30:32
 * @LastEditTime: 2022-03-03 14:47:28
 */
import { createApp } from "vue";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import HelloWorld2 from "./components/HelloWorld2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: HelloWorld },
    { path: "/111", component: HelloWorld2 },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
