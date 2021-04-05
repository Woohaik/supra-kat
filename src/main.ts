import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import "./assets/scss/styles.scss";

const API_KEY = "5b81395f-e824-4614-bea6-7e5ad907e5d7";

axios.defaults.headers.common["x-api-key"] = API_KEY;

const app = createApp(App);
app.use(store).use(router).use(VueAxios, axios);
app.mount("#app");
