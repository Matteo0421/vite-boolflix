	
import { reactive } from 'vue'

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  apiUrlSerieTv: 'https://api.themoviedb.org/3/search/tv',
  cardsList: [],
  cardsListSerieTv: [],
  queryParams: {
    api_key: 'eb8089c22a2d2fcac201fd0048e497ea',
    language: 'it_IT',
    query: '',
  }
})