<script>
  import GetKatt from '../components/GetKatt.vue'

  export default {
    components: {
      GetKatt
    }
  }
</script>

<template>
  <GetKatt />
  <h1>
    {{ $route.params.name }}
  </h1>
</template>
