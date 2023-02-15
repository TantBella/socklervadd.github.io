<script>
// Denna komponent är ett sökfält som fetchar bild och namn på den ras man söker efter. Den catchar om man skriver konstigt så inte hela sidan kraschar och skriver två felmeddelanden i konsolen. Den importerar bootstrap som används på sökfältet.

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'

export default {
  data() {
    return {
      inputCat: null
    };
  },

  methods: {
    searchCat() {
      axios({
        method: "get",
        headers: {
          "X-Api-Key": "EKgsAcs2KqrEM1dUIAmdt7FyVrR8CvU3cuo9rbus"
        },
        url: `https://api.api-ninjas.com/v1/cats?name=${this.inputCat}`
      })
        .then((response) => {
          this.$store.commit("updateCats", response.data);
        }).catch(function (error) {
          console.log(error.toJSON());
          console.log("Det verkar tyvärr inte finns någon kattras med det namnet i vår databas! Vänligen försök med en annan ras.");
        });
    }
  },

  computed: {
    cats: {
      get() {
        return this.$store.state.cats;
      },
      set(value) {
        this.$store.commit("updateCats", value);
      }
    }
  },

  watch: {
    inputCat(t) {
      console.log(`Konsolloggar det som skrivs i sökfältet: ${t}`);
    }
  }
}
</script>

<template>
  <div id="search">
    <form class="d-flex input-group w-auto">

      <input class="form-control rounded" type="search" @keyup.enter="searchCat()" v-model="inputCat" required
        placeholder="Sök efter en kattras här" />
      <!-- aria-label="Search" aria-describedby="search-addon" -->
      <input class="btn btn-outline-success" type="button" @click="searchCat()" value="SÖK" :disabled="!inputCat" />

    </form>
  </div>
  <div id="searchresults">
    <ul>
      <li v-for="cat in searchCat" :key="cat">
        <img :src="cat.image_link" />
        {{ cat.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
#search {
  margin: auto 35vw;
}

#searchresults img {
  max-width: 250px;
  margin: 20px auto;
  padding: 10px
}
</style>
