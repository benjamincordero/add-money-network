import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./assets/style.css";

const VueFire = require("vuefire");
createApp(App)
  .use(store)
  .use(router)
  .use(VueFire)
  .use(VueSweetalert2)
  .mount("#app");
