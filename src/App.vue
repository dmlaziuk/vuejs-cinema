<template>
    <div id="app">
        <app-title></app-title>
        <overview></overview>
  </div>
</template>
<script>
import AppTitle from './components/AppTitle.vue'
import Overview from './components/Overview.vue'
export default {
    components: { AppTitle, Overview }
}
</script>
