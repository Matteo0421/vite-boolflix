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
      handleSearch() {
      this.getApi();
      this.getApiSerieTv();
      this.getApiTopPopular();
      this.getApiTopRated();
    },
      getApi(){
        axios.get(this.store.apiUrl, {
          params: store.queryParams
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

          this.store.cardsListSerieTv = result.data.results.map(item => ({
            original_title: item.original_name,
            title: item.name,
            vote_average: item.vote_average,
            original_language: item.original_language,
            poster_path: item.poster_path,
            overview: item.overview

          }))
          console.log(this.store.cardsListSerieTv);

        })
        .catch(error => {
          console.log(error);
        })
      },


      getApiTopPopular(){
        axios.get(this.store.apiUrlTopPopular, {
          params: store.queryParams
        })
        .then( result => {

          this.store.cardsListPopular = [];

          this.store.cardsListPopular = result.data.results.map(item => ({
            original_title: item.original_name,
            title: item.name,
            vote_average: item.vote_average,
            original_language: item.original_language,
            poster_path: item.poster_path,
            overview: item.overview

          }))
          console.log(this.store.cardsListSerieTv);

        })
        .catch(error => {
          console.log(error);
        })
      },
      getApiTopRated(){
        axios.get(this.store.apiUrlTopRated, {
          params: store.queryParams
        })
        .then( result => {

          this.store.cardsListTopRated = [];

          this.store.cardsListTopRated = result.data.results.map(item => ({
            original_title: item.original_name,
            title: item.name,
            vote_average: item.vote_average,
            original_language: item.original_language,
            poster_path: item.poster_path,
            overview: item.overview

          }))
          console.log(this.store.cardsListTopRated);

        })
        .catch(error => {
          console.log(error);
        })
      },
    },
    mounted(){
      this.getApi()
      this.getApiSerieTv()
      this.getApiTopPopular()
      this.getApiTopRated();

    }
  }

</script>

<template>
  <Header @startSearch="handleSearch" />
  <Main />
</template>



<style lang="scss" >
@use './assets/scss/main.scss';
</style>