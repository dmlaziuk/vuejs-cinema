<template>
    <div id="detail" v-if="movie">
        <movie-item :movie="movie">
            <div class="movie-details">
                <p class="movie-genre">{{ movie.Genre }}</p>
                <p class="movie-plot">{{ movie.Plot }}</p>
                <table>
                    <tr><td>Release date: </td><td>{{ movie.Released }}}</td></tr>
                    <tr><td>Runing time: </td><td>{{ movie.Runtime }}}</td></tr>
                    <tr><td>Director: </td><td>{{ movie.Director }}}</td></tr>
                    <tr><td>Actors: </td><td>{{ movie.Actors }}}</td></tr>
                </table>
            </div>
            <div class="home">
                <router-link :to="{ name: 'home' }">Back to Results</router-link>
            </div>
        </movie-item>
    </div>
</template>

<script>
import MovieItem from './MovieItem.vue'
export default {
    props: [ 'movies' ],
    components: { MovieItem },
    computed: {
        movie() {
            let movie = this.movies.find(movie => movie.id === this.$route.params.id)
            return movie ? movie.movie : null
        }
    }
}
</script>
