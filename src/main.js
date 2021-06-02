import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { VueFormBuilderPlugin } from "v-form-builder";
import "v-form-builder/dist/v-form-builder.css"; //Dodaje CSS vašem projektu
// install now
Vue.use(VueFormBuilderPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
