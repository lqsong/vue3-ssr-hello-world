import { createSSRApp } from "vue";
import { createMemoryHistory } from "vue-router";
import App from "./App.vue";
import createRouter from "./router";
import createStore from "./store";

export default function () {
  const app = createSSRApp(App);

  const router = createRouter(createMemoryHistory());
  app.use(router);

  const store = createStore();
  app.use(store);

  return {
    app,
    router,
    store,
  };
}
