<script>
  export default {
    props: {
      original_title: String,
      title: String,
      vote_average: Number,
      original_language: String,
    }
  }
</script>


<template>
  <div class="col ">
    <div class="card p-3" style="width: 18rem;">
  <!-- <img :src="image" class="card-img-top rounded-circle hover-effect" :alt="name"> -->
  <div class="card-body">
    <h5 class="card-title">{{ original_title }}</h5> 
    <p class="card-text">{{ title }}</p>
    <p class="card-text">{{ vote_average }}</p>
  </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
 
</style>