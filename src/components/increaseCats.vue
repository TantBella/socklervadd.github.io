<script>
  // Denna komponent hämtar info från Getkatten. Det finns  props och custom event som ökar hur många som skrivs ut. Dessa ropas på i kattsnurran.

  import GetKatt from './GetKatt.vue'

  export default {
    methods: {
      propsCatas() {
        console.log(this.flerKatter, 'testar props')
      },
      increaseCats() {
        console.log('öka katterna')
        this.$emit('increase', 3)
        console.log('stycken kattraser kan man se nu')
      }
    },
    data() {
      return {
        flerkatter: null
      }
    },

    props: {
      flerKatter: {
        type: Number,
        required: true
      }
    },
    emits: ['increase'],

    components: {
      GetKatt
    }
  }
</script>

<template>
  <GetKatt />
  <div id="knapp">
    <p>
      Här kan du lära dig mer om olika kattraser. Tryck på knappen för att se
      fler katter.
    </p>
    <button @click="increaseCats">Öka, öka!</button>
  </div>
</template>
