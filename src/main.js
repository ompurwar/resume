import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faDownload, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faGithubSquare, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret,faGithubSquare,faInstagram,faGithub,faLinkedin,faDownload,faWhatsapp)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
