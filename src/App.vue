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
          params: store.queryParams
          // {
          //   api_key: 'eb8089c22a2d2fcac201fd0048e497ea',
          //   language: 'it_IT',
          //   query: 'cars'
          // }
        })
        .then( result => {

          this.store.cardsList = [];

          this.store.cardsList = result.data.results;
          console.log(this.store.cardsList);

        })
        .catch(error => {
          console.log(error);
        })
      },

      getApiSerieTv(){
        axios.get(this.store.apiUrlSerieTv, {
          params: store.queryParams
        })
        .then( result => {

          this.store.cardsListSerieTv = [];

          this.store.cardsListSerieTv = result.data.results;
          console.log(this.store.cardsListSerieTv);

        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getApi()
      this.getApiSerieTv()
    }
  }

</script>

<template>
  <Header @startSearch="getApi"/>
  <Main />
</template>



<style lang="scss" >
@use './assets/scss/main.scss';
</style>