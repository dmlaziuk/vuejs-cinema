<template>
    <div id="app">
        <app-title></app-title>
        <router-view
            :genre="genre"
            :time="time"
            :movies="movies"
            :day="day">
        </router-view>
  </div>
</template>
<script>
import moment from 'moment-timezone'
import Vue from 'vue'
import VueRouter from 'vue-router'
import AppTitle from './AppTitle.vue'
import Overview from './Overview.vue'
import Detail from './Detail.vue'

const bus = new Vue()
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } })

const router = new VueRouter({
    routes: [
        { path: '/', component: Overview, name: 'home' },
        { path: '/movie/:id', component: Detail, name: 'movie' },
        { path: '*', redirect: { name: 'home' } }
    ]
})

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
    components: { AppTitle, Overview },
    created() {
        this.$http.get('/api').then(response => { this.movies = response.data })
        this.$bus.$on('check-filter', this.checkFilter)
    },
    router
}
</script>
