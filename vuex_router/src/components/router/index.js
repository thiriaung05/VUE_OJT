import { createWebHistory, createRouter } from "vue-router";
import contact from '../views/Contact'
import home from '../views/AddName'

const routes =  [
  {
    path: "/",
    alias: "/Home",
    component: home
  },
  {
    path: "/contact",
    name: "contact",
    component: contact
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;