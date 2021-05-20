import Vue from "vue";
import VueRouter from "vue-router";
import ExampleFormRenderer from "../views/ExampleFormRenderer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/ExampleFormRenderer",
    name: "ExampleFormRenderer",
    component: ExampleFormRenderer,
  },
  {
    path: "/",
    name: "FormBuilder",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/FormBuilder.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
