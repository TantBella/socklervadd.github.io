<script>
  import NavBar from './components/NavBar.vue'
  // import '/assets/main.scss'

  export default {
    components: {
      NavBar
    }
  }
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div id="wrapper">
    <main>
      <RouterView />
    </main>
  </div>
  <footer>
    <p>Bella Solomon Falkfrii 2023</p>
  </footer>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

  body {
    font-family: 'Quattrocento sans', sans-serif;

    background-color: #cbc9c9;
  }

  #wrapper {
    background-color: #2f2f2f;
    margin: 0px auto 0px auto;
    width: 90%;
  }

  header {
    background-color: #c8c8c8;
    flex-direction: row;
  }

  nav {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    overflow: hidden;
  }

  li a {
    color: #61781d;
    padding: 2px;
    margin: 5px;
    font-size: larger;
    text-decoration: none;
  }

  li a:hover {
    color: #9e9e3a;
    font-weight: bold;
    text-decoration: none;
  }

  li {
    color: #c8c8c8;
    list-style: none;
  }

  main h1,
  main p {
    color: #c8c8c8;
    padding: 10px;
    text-align: center;
  }

  footer {
    background-color: #c8c8c8;
    text-align: end;
  }

  footer p {
    color: #2f2f2f;
    font-family: 'Dancing Script', cursive;
    margin: 3px 3px 3px auto;
    padding: 10px;
  }
</style>

<!-- Första sidan några få pokemons med bild och namn. Sen finns en knapp där det står se fler pokemons om man går in dit finns bild ohc nman utskrivet pp många. Denna ska finnas på pokenames komponenten.
Ny ide! På första sidan några random disney folk på sida två kan kan söka efter nån specifik
Ny ide igen! Första sidan kommer upp en meme. Man kan gå in på en annan sida för qatt se fler.

Annan ide: re4cept? kommer upp nåt på första sidan. sedan kan man ha kategorier med tio per kategorie. man kan söka efter recept?-->
