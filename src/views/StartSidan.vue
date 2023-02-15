<script>
// Detta är startsidan. Där kan man söka efter en specifik kattras genom komponenten searchfield eller klicka på nån av länkarna i navbaren.

import SearchField from '../components/SearchField.vue';

export default {
  computed: {
    cats: {
      get() {
        return this.$store.state.cats;
      },
    }
  },

  components: {
    SearchField
  }
}
</script>

<template>
  <div id="start">
    <h1>Välkommen</h1>
    <SearchField />
    <div>
      <ul id="searchresult">
        <li v-for="cat in cats" :key="cat">
          <img :src="cat.image_link" />
          {{ cat.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
#start {
  background-image: url(assets/kattbg5.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  margin: 0 auto;
  overflow-x: hidden;
}

#searchresult {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 900px;
  gap: 5px;
  margin: auto;
  padding: 10px;
  text-align: center;
}

#searchresult li {
  background-color: #2f2f2f5b;
}

#searchresult img {
  border-radius: 50px;
  margin: 20px auto;
  max-width: 250px;
  padding: 10px
}
</style>
