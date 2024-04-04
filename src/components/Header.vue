<script>
import {store} from '../data/store'
  export default {  
    data(){https://bos.boolean.careers/_nuxt/img/1692605450-avatar.9ce1136.png
      return{
        store,
      }
    },
    methods:{
      startSearch(){
        this.$emit('startSearch')
        console.log(this.store.queryParams)      }
    }

    
  }
</script>


<template>
  <div class="d-flex justify-content-between   my-3  p-2 ">
    <img src="../img/logo.png" alt="BOOLFLIX" style="height: 65px;">    <div class="col-5 text-end ">
      <input class="p-1 col-6 text-danger" type="text" id="searchInput" placeholder="Cerca il tuo film o la tua serie Tv "
      @keyup.enter="startSearch" v-model.trim="store.queryParams.query" >
      <button class="btn btn-danger m-3  " @click="startSearch">Cerca</button>
    </div>

  </div>
</template>



<style lang="scss" scoped>

</style>