import './style.scss'

import moment from 'moment-timezone'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './components/App.vue'

moment.tz.setDefault("UTC")

Vue.use(VueResource)
Vue.use(VueRouter)

new Vue({
    el: '#app',
    ...App
})
