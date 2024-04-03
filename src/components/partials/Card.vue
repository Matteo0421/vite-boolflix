<script>
  export default {
    props: {
      original_title: String,
      title: String,
      vote_average: Number,
      original_language: String,
      poster_path: String
    },
    methods: {
      getPosterUrl() {
        if (this.poster_path) {
          return 'https://image.tmdb.org/t/p/w50/' + this.poster_path;
        } else {
          // Inserisci un'immagine di fallback o gestisci il caso in cui poster_path sia vuoto
          return 'URL_DEL_FALLBACK_IMAGE';
        }
      }
    }
  }
</script>


<template>
  <div class="col">
    <div class="card p-3" style="width: 18rem;">
      <img :src="getPosterUrl()" class="card-img-top rounded-circle hover-effect" :alt="original_title">
      <div class="card-body">
        <h5 class="card-title">{{ original_title }}</h5> 
        <p class="card-text">{{ title }}</p>
        <p class="card-text">{{ original_language }}</p>
        <p class="card-text">{{ vote_average }}</p>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
 
</style>