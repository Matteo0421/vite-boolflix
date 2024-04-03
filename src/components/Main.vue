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
  <div class="text-center  container  ">
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
</template>



<style lang="scss" scoped>

</style>