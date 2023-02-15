<script>
// På denna sida importerar jag den info som finns i kattbild och sökfälts-komponenterna.

import Kattbild from '../components/KattBild.vue'
import SearchField from '../components/SearchField.vue'

export default {

  computed: {
    cats: {
      get() {
        return this.$store.state.cats
      }
    }
  },

  components: {
    Kattbild,
    SearchField
  }
}
</script>

<template>
  <SearchField />
  <Kattbild />
</template>

<style lang="scss" scoped>
h1 {
  font-style: italic;
}


li {
  list-style: none;
  text-transform: initial;
}
</style>
