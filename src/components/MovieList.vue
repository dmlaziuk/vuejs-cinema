<template>
    <div id="movie-list">
        <div v-for="movie in filteredMovies" :key="movie.title" class="movie">{{ movie.title }}</div>
    </div>
</template>
<script>
import genres from '../util/genres'
export default {
    data: ()=> {
        return {
            movies: [
                { title: 'Pulp Fiction', genre: genres.CRIME},
                { title: 'Natural Born Killers', genre: genres.COMEDY},
                { title: 'Trainspotting', genre: genres.DOCUMENTARY }
            ]
        }
    },
    props: [ 'genre', 'time' ],
    computed: {
        filteredMovies() {
            return this.movies.filter(this.moviePassesGenreFilter)
        }
    },
    methods: {
        moviePassesGenreFilter(movie) {
            if (!this.genre.length) {
                return true
            } else {
                return this.genre.find(genre => movie.genre === genre)
            }
        }
    }
}
</script>
