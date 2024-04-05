<script>
import {store} from '../data/store'
  export default {  
    data(){
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
    <nav class="navbar navbar-expand-lg bg-body-black">
  <div class="container-fluid">
    <img src="../img/logo.png" alt="BOOLFLIX" style="height: 65px;">    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Serie Tv</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Film</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Aggiunti di recente</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-white" aria-disabled="true">La mia lista</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    <div class="col-5 text-end ">
      <span><i class="fa-solid fa-bell text-danger m-1 fs-4 "></i></span>
      <img class="m-3" src="../img/user.jpeg" alt="USER_BOOLFLIX" style="height: 37px;">
      <span><i class="fa-solid fa-sort-down text-danger me-3"></i></span>    
      <input class="p-1 col-4 text-danger" type="text" id="searchInput" placeholder="Cerca il tuo film o la tua serie Tv "
      @keyup.enter="startSearch" v-model.trim="store.queryParams.query" >
      <button class="btn btn-danger m-3  " @click="startSearch"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>

  </div>
</template>



<style lang="scss" scoped>

</style>