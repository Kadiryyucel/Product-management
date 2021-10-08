import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret ,faTshirt,faSwatchbook ,faPlus,faMinus,faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import YubiComponent from "./components/Installer"

library.add(faUserSecret,faTshirt,faSwatchbook,faPlus,faMinus,faEllipsisH)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(YubiComponent).use(store).use(router).use(ElementPlus).mount('#app');
