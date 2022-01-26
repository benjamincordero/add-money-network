import { createRouter, createWebHistory } from "vue-router";
import List from "../views/List.vue";
import Add from "../views/Add.vue";
import Edit from "../views/Edit.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
//import Dashboard from "../views/Dashboard.vue";
import store from "../store";
const routes = [
  /*  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  */
  {
    path: "/",
    name: "List",
    component: List,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { requiresAuth: true },
  },

  {
    path: "/add",
    name: "Add",
    component: Add,
    meta: { requiresAuth: true },
  },
  {
    path: "/edit/:ref",
    name: "Edit",
    component: Edit,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
