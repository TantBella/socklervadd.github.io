<script>
// Denna komponent är en sida som ropar på kattsnurran och sökfältet.

import KattSnurra from '../components/KattSnurran.vue';
import SearchField from '../components/SearchField.vue';

export default {
  data() {
    return {
      name: null
    };
  },

  components: {
    KattSnurra,
    SearchField
  }
}
</script>


<template>
  <SearchField />
  <KattSnurra />
</template>
