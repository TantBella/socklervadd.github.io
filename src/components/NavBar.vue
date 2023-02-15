<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

export default {
}
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <ul>
        <li>
          <RouterLink to="/">Start</RouterLink>
        </li>
        <li>
          <RouterLink to="/katt/raser">Några raser</RouterLink>
        </li>
        <li>
          <RouterLink to="/katt/allaraser">Alla raser</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
ul {
  display: flex;
  flex-direction: row;
}
</style>
