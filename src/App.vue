<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
  export default {
    components:{
      Header,
      Main
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        axios.get(this.store.apiUrl, {
          params:{
            api_key: 'eb8089c22a2d2fcac201fd0048e497ea',
            language: 'it_IT',
            query: 'Matrix'
          }
        })
        .then( result => {

          this.store.cardsList = [];

          this.store.cardsList = result.data.results;
          console.log(this.store.cardsList);

        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getApi()
    }
  }

</script>

<template>
  <Header />
  <Main />
</template>



<style lang="scss" >
@use './assets/scss/main.scss';
</style>