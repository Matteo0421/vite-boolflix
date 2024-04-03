<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store,
        query: ''
      }
    },
    methods:{
      startSearch(){
        this.store.queryParams= {
          api_key: 'eb8089c22a2d2fcac201fd0048e497ea',
          language: 'it_IT',
          query: this.query
        }
        this.$emit('startSearch')
        console.log(this.store.queryParams)      }
    }

    
  }
</script>


<template>
  <div class="d-flex justify-content-between   my-3  p-2 ">
    <h1 class="text-danger">BOOLFLIX</h1>
    <div class="col-5 text-end ">
      <input class="p-1 col-6 " type="text" id="searchInput" placeholder="Cerca il tuo film o la tua serie Tv "
      @keyup.enter="startSearch" v-model.trim="query" >
      <button class="btn btn-warning m-3  " @click="startSearch">Cerca</button>
    </div>

  </div>
</template>



<style lang="scss" scoped>

</style>