<template>
    <div id="overview">
        <day-select :selected="day"></day-select>
        <div  class="main">
            <movie-list
                :genre="genre"
                :time="time"
                :movies="movies"
                :day="day">
            </movie-list>
            <movie-filter></movie-filter>
        </div>
    </div>
</template>

<script>
import DaySelect from './DaySelect.vue'
import MovieList from './MovieList.vue'
import MovieFilter from './MovieFilter.vue'

export default {
    props: [ 'genre', 'time', 'movies', 'day' ],
    components: { DaySelect, MovieList, MovieFilter }
}
</script>
