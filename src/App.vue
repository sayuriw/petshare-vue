<template>
  <div id="app">
    <card-list :cards="cards"></card-list> 
  </div>
</template>

<script>
import CardsServices from '@/utils/CardsServices'
import CardList from './components/CardList.vue'

export default {
  name: "app",
  data: function() {
    return {
      cards: []
    }
  },
  components: {
    CardList
  },
  mounted () {
    this.getCards()
  },
  methods: {
    async getCards () {
      const response = await CardsServices.fetchCards()
      this.cards = response.data
    }
  }
};
</script>

<style>
* {
    box-sizing: border-box;
  }

  html {
    background: white
  }
  
  body {
    margin: 0;
    background: var(--background-grey);
    font-family: 'Quicksand', sans-serif, Helvetica;
    color: #4F4F4F;
    font-size: 17px;
  }
  
#app {
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  @media (min-width: 900px) {
    width: 375px;
    height: 667px;
    border: 20px solid black;
    border-width: 45px 20px;
    border-radius: 20px;
    box-shadow: 30px 40px 30px #2264;
    margin: 40px auto;
  }
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
