import { createSSRApp } from "vue";
import { createWebHistory } from "vue-router";
import App from "./App.vue";
import createRouter from "./router";
import createStore from "./store";

// 针对客户端的启动逻辑......
const app = createSSRApp(App);
const router = createRouter(createWebHistory());
app.use(router);

const store = createStore();
app.use(store);

router.isReady().then(() => {
  app.mount("#app");
});
