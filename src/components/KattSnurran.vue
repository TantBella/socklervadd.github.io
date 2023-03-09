<script>
  // Denna komponent hämtar info från increasecats. Den skriver ut 3 arrayer från början och med en knapp kan man öka på och se fler.
  import increaseCats from './increaseCats.vue'

  export default {
    computed: {
      cats: {
        get() {
          return this.limit
            ? this.$store.state.cats.slice(0, this.limit)
            : this.$store.state.cats
        }
      }
    },

    data() {
      return {
        cat: [],
        limit: 3
      }
    },

    methods: {
      meraFlera(p) {
        this.limit = p + this.limit
        console.log(this.limit)
      }
    },

    components: {
      increaseCats
    }
  }
</script>

<template>
  <increaseCats @increase="meraFlera" :fler-katter="limit" />
  <div class="container">
    <ul v-for="ca in cats" :key="ca">
      <li class="item">
        <router-link :to="`${ca.name}`">
          <img :src="ca.image_link" />
          {{ ca.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  li {
    list-style: none;
    border-radius: 4px;
  }

  .item {
    margin: 2px;
    padding: 2px;
    text-align: center;
  }

  img {
    height: 85%;
    width: 85%;
    border: 1px solid #ddd;
  }

  .item:hover {
    box-shadow: 0 0 2px 1px rgba(20, 20, 20, 0.5);
    height: 100%;
    width: 100%;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    max-width: 900px;
    height: auto;
    gap: 5px;
    margin: auto;
    padding: 10px;
  }
</style>

<!-- https://api/images/:food -->
<!-- https://api.imgflip.com/get_memes -->
<!-- https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/100.png -->
