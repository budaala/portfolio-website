<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
</template>

<style>
body {
  position: relative;
  background-color: #001214 !important;
  color: #F5F5F5 !important;
  font-family: 'Cambay', sans-serif;
}

h1 {
  /* Frontend Developer */
  width: 954px;
  height: 147px;

  font-weight: 700;
  font-size: 90px;
  line-height: 147px;
  letter-spacing: 0.01em;

  text-shadow: 0px 0px 17.7px #E0007F;
}

h2 {
font-weight: 700;
font-size: 60px;
line-height: 98px;
text-align: center;
letter-spacing: 0.01em;

text-shadow: 0px 0px 17.7px #E0007F;
}

h3 {
font-weight: 400;
font-size: 36px;
line-height: 59px;
letter-spacing: 0.01em;

color: #E0007F;
}


header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.yellow-button {
  /* width: 187px;
  height: 49px; */
  background: #FFBD00;
  border: none;
  border-radius: 62px;
  font-family: 'Alegreya Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  /* line-height: 29px; */
  color: #F5F5F5;
}

.yellow-button:hover {
  background: #FFD700;
}
</style>
