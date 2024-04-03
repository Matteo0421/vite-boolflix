<script>
import Card from './partials/Card.vue';
import {store} from '../data/store'
  export default {
    components:{
      Card
    },
    data(){
      return{
        store
      }
    }
  }
</script>


<template>
  <div class="text-center  container mb-5 ">
    <h2>FILM</h2>
    <div class="row row-cols-4  p-3">
      <Card v-for=" card in this.store.cardsList"
        :key="card.id"
        :original_title="card.original_title"
        :title="card.title"
        :vote_average="card.vote_average"
        :original_language="card.original_language"
        />

    </div>
  </div>

  <div class="text-center  container mb-5 ">
    <h2>SERIE TV</h2>
    <div class="row row-cols-4  p-3">
      <Card v-for=" card in this.store.cardsListSerieTv"
        :key="card.id"
        :original_title="card.original_title"
        :title="card.title"
        :vote_average="card.vote_average"
        :original_language="card.original_language"
        :poster_path="card.poster_path"
        />

    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>