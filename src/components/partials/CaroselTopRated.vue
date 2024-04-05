<script>
import Card from './Card.vue';
import { store } from '../../data/store';
// Importa i componenti Swiper Vue.js
import { Swiper, SwiperSlide } from 'swiper/vue';

// Importa gli stili di Swiper
import 'swiper/css/bundle'; // Importa tutti gli stili di Swiper

  export default {
    components: {
      Swiper,
      SwiperSlide,
      Card
    },
    setup() {
      return {
        store
      };
    },
  }
</script>

<template>
  <div class="swiper-container">
    <swiper :watchSlidesProgress="true" :slidesPerView="3" class="mySwiper">
      <swiper-slide v-for="card in store.cardsListTopRated" :key="card.id">
        <Card
          :original_title="card.original_title"
          :title="card.title"
          :vote_average="card.vote_average"
          :original_language="card.original_language"
          :poster_path="card.poster_path"
          :overview="card.overview"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>



<style lang="scss" scoped>

.swiper-container {
  width: 80%;
  margin: 0 auto;
}

.swiper-slide {
  width: auto !important; 
}

</style>