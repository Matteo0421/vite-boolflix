<script>
  export default {
    props: {
      original_title: String,
      title: String,
      vote_average: Number,
      original_language: String,
      poster_path: String,
      overview: String,
    },
    methods: {
      getFullImagePath(posterPath) {
      if (posterPath) {
        return 'https://image.tmdb.org/t/p/w500' + posterPath;
      } else {
        // Inserisci un'immagine di fallback o gestisci il caso in cui poster_path sia vuoto
        return 'URL_DEL_FALLBACK_IMAGE';
      }
     }
    },
    computed: {
    // Metodo per ottenere il voto medio trasformato da 1 a 5
    transformedVote() {
      // Arrotonda sempre per eccesso il voto medio
      const roundedVote = Math.ceil(this.vote_average);
      // Trasforma il voto medio da 1 a 10 a un voto da 1 a 5
      return Math.ceil(roundedVote / 2);
    }
   },

  }
</script>


<template>
  <div class="col">
    <div class="card p-3" style="width: 18rem;">
      <img :src="getFullImagePath(poster_path)" class="card-img-top rounded-circle hover-effect" :alt="original_title">      <div class="card-body">
        <h5 class="card-title">{{ original_title }}</h5> 
        <p class="card-text">{{ title }}</p>
        <p class="card-text">{{ original_language }}</p>
        <div class="stars">
          <i v-for="index in 5" :key="index" :class="{ 'fas fa-star': index <= transformedVote, 'far fa-star': index > transformedVote }"></i>
        </div>  
        <p class="card-text">{{ overview }}</p>
    </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
 .stars {
  color: #f0bb00; /* Colore delle stelline */
}
</style>