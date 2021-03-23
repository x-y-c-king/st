import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'vant/lib/index.css';
import vant from 'vant'
const app = createApp(App).use(store).use(router).use(vant).mount('#app')
