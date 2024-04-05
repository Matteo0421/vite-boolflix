<script>
import Card from './partials/Card.vue';
import Carosel from './partials/Carosel.vue';
import CaroselTopRated from './partials/CaroselTopRated.vue';
import {store} from '../data/store'
  export default {
    components:{
      Card,
      Carosel,
      CaroselTopRated
    },
    data(){
      return{
        store
      }
    }
  }
</script>


<template>
  <div class="text-center  container mb-5 " :class="{ 'd-none': store.queryParams.query !== '' }">
    <h2 class="text-danger">TOP POPULAR <i class="fa-solid fa-film"></i> </h2>

    <div class="row row-cols-4  p-3">
      <Carosel />
    </div>
  </div>

  <div class="text-center  container mb-5 " :class="{ 'd-none': store.queryParams.query !== '' }">
    <h2 class="text-danger">TOP RATED <i class="fa-solid fa-film"></i> </h2>

    <div class="row row-cols-4  p-3">
      <CaroselTopRated />

    </div>
  </div>



  <div class="text-center  container mb-5 " :class="{ 'd-none': store.queryParams.query === '' }">
    <h2 class="text-danger">FILM <i class="fa-solid fa-film"></i> </h2>

    <p v-if="!store.queryParams.query" class="text-white p-3 fs-3">Non hai ancora cercato nessun Film</p>

    <div class="row row-cols-4  p-3">
      <Card v-for=" card in this.store.cardsList"
        :key="card.id"
        :original_title="card.original_title"
        :title="card.title"
        :vote_average="card.vote_average"
        :original_language="card.original_language"
        :poster_path="card.poster_path"
        :overview="card.overview"

        />

    </div>
  </div>

  <div class="text-center  container mb-5 "
  :class="{ 'd-none': store.queryParams.query === '' }">
    <h2 class="text-danger">SERIE TV<i class="fa-solid fa-tv"></i> </h2>

    <p v-if="!store.queryParams.query" class="text-white p-3 fs-3">Non hai ancora cercato nessuna Serie Tv</p>
    <div class="row row-cols-4  p-3">
      <Card v-for=" card in this.store.cardsListSerieTv"
        :key="card.id"
        :original_title="card.original_title"
        :title="card.title"
        :vote_average="card.vote_average"
        :original_language="card.original_language"
        :poster_path="card.poster_path"
        :overview="card.overview"

        />

    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>