import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core"

import {
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons"

library.add(faShoppingCart)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
