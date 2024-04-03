<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    }
    
  }
</script>


<template>
  <div class="d-flex justify-content-between   my-3  p-2 ">
    <h1 class="text-danger">BOOLFLIX</h1>
    <div class="col-5 text-end ">
      <input class="p-1 col-6 " type="text" id="searchInput" placeholder="Cerca il tuo film o la tua serie Tv " >
      <button class="btn btn-warning m-3  " @click="startSearch">Cerca</button>
    </div>

  </div>
</template>



<style lang="scss" scoped>

</style>