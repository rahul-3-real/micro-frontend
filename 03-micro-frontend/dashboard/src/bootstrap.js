import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {
  createApp(Dashboard).mount(el);
};

if (process.env.NODE_ENV === "development") {
  const app = document.querySelector("#__iso-dashboard");
  if (app) {
    mount(app);
  }
}

export default mount;
