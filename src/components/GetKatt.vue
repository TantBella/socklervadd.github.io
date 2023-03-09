<script>
  // Denna komponenten är grundkomponenten som fetchar (genom axios) informationen som sedan finns i de andra filerna.

  import axios from 'axios'

  export default {
    computed: {
      cats: {
        get() {
          return this.$store.state.cats
        },
        set(value) {
          this.$store.commit('updateCats', value)
        }
      }
    },

    created() {
      // this.propsCatas(),

      axios
        .get('https://api.api-ninjas.com/v1/cats?name=a', {
          headers: {
            'X-Api-Key': 'EKgsAcs2KqrEM1dUIAmdt7FyVrR8CvU3cuo9rbus'
          }
        })
        .then((response) => {
          this.cats = response.data
          console.log('hämtar katt')
        })
    },

    methods: {
      updateCats(e) {
        this.$store.commit('updateCats', e.target.value)
      }
    },

    data() {
      return {
        om: 15
      }
    }
  }
</script>

<template v-if="om > 5">
  <div class="getkatten">
    <h1>Välkommen till Cats & Facts!</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sunt quos
      dolorem illo quibusdam aliquid praesentium nulla quasi, cupiditate ea
      minima perferendis? Temporibus soluta id, mollitia corrupti ipsum commodi
      fugiat!
    </p>
  </div>
</template>

<style lang="scss">
  .getkatten {
    padding: 1px 90px 1px 90px;
    margin-bottom: 10px;
  }

  #knapp {
    text-align: center;
  }
</style>
