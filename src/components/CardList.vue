<template>
  <div>
    <div v-for="(card) in cards"
        :key="card._id">
      <img :src="card.picture"/>
      <div class="textWrapper">
      <h3>{{card.title}}</h3>
      <p>{{card.description}}</p>
        <div v-for="(tag, index) in card.tags" :key="index">
          {{tag}} 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-list",
  data: function() {
    return {
      tags: []
    }
  },
  props: [
     'cards'
   ], 
  methods: {
    showTags: function(card) {
      const tags = Object.values(card.tags)
      return tags
    }
  }
}
</script>
<style scoped>
  img {
    height: 40vh;
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    box-shadow: 0 10px 10px #0002;
    background-color: lightgrey;
    position: relative;
  }
  .textWrapper {
    margin: 10px;
    margin-bottom: 0;
    position: relative;
  }

</style>