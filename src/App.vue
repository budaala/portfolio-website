<script setup>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <!-- <router-view /> -->
  <Navbar />
  <Home />
  <Projects />
  <Skills />
  <Contact />
</template>

<style>
/* import cambay font */
@import url('https://fonts.googleapis.com/css2?family=Cambay:wght@400;700&display=swap');

body {
  background-color: #001214 !important;
  color: #F5F5F5 !important;
  font-family: 'Cambay', sans-serif;
  position: relative;
}

h1 {
  /* Frontend Developer */
  font-weight: 700;
  font-size: 86px;
  letter-spacing: 0.01em;
  margin-top: 17%;
  text-shadow: 0px 0px 17.7px #E0007F;
  position: relative;
  z-index: 101 !important;
}

h2 {
  font-weight: 700;
  font-size: 60px;
  line-height: 98px;
  text-align: center;
  letter-spacing: 0.01em;
  padding-bottom: 10px;
  text-shadow: 0px 0px 17.7px #E0007F;
}

h3 {
  font-size: 30px;
  letter-spacing: 0.01em;

  color: #E0007F;
}

p, li {
  font-size: 1.2rem;
  font-family: 'Cambay', sans-serif;
}

a {
  color: #FFBD00;
}

header {
  line-height: 1.5;
}

.container-md {
    padding-top: 200px;
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
  width: 170px;
  height: 45px;
  background: #FFBD00;
  border: none;
  border-radius: 62px;
  font-family: 'Alegreya Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #F5F5F5;
}

.yellow-button:hover {
  background: #8d6802;
}
</style>
