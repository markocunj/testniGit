import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { VueFormBuilderPlugin } from "v-form-builder";
import "v-form-builder/dist/v-form-builder.css";
// install now
Vue.config.productionTip = false;
Vue.use(VueFormBuilderPlugin);

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
