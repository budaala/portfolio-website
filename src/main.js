import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGithub, faLinkedinIn, faEnvelope);

import { createApp } from 'vue'
import App from './App.vue'

// import * as VueRouter from 'vue-router'

// import Home from './components/Home.vue'
// import Projects from './components/Projects.vue'
// import Skills from './components/Skills.vue'
// import Contact from './components/Contact.vue'

// const routes = [
//     { path: '/', component: Home },
//     { path: '/projects', component: Projects },
//     { path: '/skills', component: Skills },
//     { path: '/contact', component: Contact },
// ]

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes,
// })

// createApp(App).use(router).mount('#app')

createApp(App).mount('#app')
