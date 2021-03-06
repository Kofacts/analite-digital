import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Works from './views/Works.vue'
import Contact from './views/Contact.vue'
import BootstrapVue from 'bootstrap-vue'
import VueParticles from 'vue-particles'

Vue.use(Router,BootstrapVue,VueParticles)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/works',
      name: 'Our Works',
      component: Works
    },
    {
      path: '/contact',
      name: 'Contact Us',
      component: Contact
    },
    {
      path: '/about',
      name: 'About Us',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    }
  ]
})
