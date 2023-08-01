import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import store from './store'
import * as filters from "./filter";

// createApp(App)
// .use(router)
// .use(store)
// .mount('#app')
const app = createApp(App);
app.use(router).use(store).mount("#app");

app.config.globalProperties.$filters = filters;