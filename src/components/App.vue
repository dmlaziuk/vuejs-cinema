<template>
    <div id="app">
        <app-title></app-title>
        <keep-alive>
            <router-view
                :genre="genre"
                :time="time"
                :movies="movies"
                :day="day">
            </router-view>
        </keep-alive>
    </div>
</template>

<script>
import moment from 'moment-timezone'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Tooltip from '../util/tooltip'
import AppTitle from './AppTitle.vue'
import Overview from './Overview.vue'
import Detail from './Detail.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Tooltip)

const router = new VueRouter({
    routes: [
        { path: '/', component: Overview, name: 'home' },
        { path: '/movie/:id', component: Detail, name: 'movie' },
        { path: '*', redirect: { name: 'home' } }
    ]
})

// create bus for events
const bus = new Vue()
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } })

// set timezone to server timezone
moment.tz.setDefault("UTC")

export default {
    data: ()=> {
        return {
            bus,
            genre: [],
            time: [],
            movies: [],
            day: moment()
        }
    },
    components: { AppTitle, Overview },
    methods: {
        checkFilter(category, title, checked) {
            if (checked) {
                this[category].push(title)
            } else {
                let index = this[category].indexOf(title)
                if (index > -1) {
                    this[category].splice(index, 1)
                }
            }
        }
    },
    created() {
        this.$http.get('/api').then(response => this.movies = response.data )
        this.$bus.$on('check-filter', this.checkFilter)
        this.$bus.$on('set-day', day => this.day = day )
    },
    router
}
</script>
