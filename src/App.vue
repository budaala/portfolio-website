<script setup>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <Home />
  <Projects />
  <Skills />
  <Contact />
  <Footer />
</template>

<style>
/* import cambay font */
@import url('https://fonts.googleapis.com/css2?family=Cambay:wght@400;700&display=swap');

body {
  background-color: #001214 !important;
  color: #F5F5F5 !important;
  font-family: 'Cambay', sans-serif;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0012140b;
}

::-webkit-scrollbar-thumb {
  background: #ffbb002d;
  border-radius: 10px;
}

h1 {
  /* Frontend Developer */
  font-weight: 700;
  font-size: 4rem;
  letter-spacing: 0.01em;
  margin-top: 10%;
  text-shadow: 0px 0px 17.7px #E0007F;
  position: relative;
  z-index: 101 !important;
}

h2 {
  font-weight: 700;
  font-size: 3rem;
  line-height: 98px;
  text-align: center;
  letter-spacing: 0.01em;
  padding-bottom: 10px;
  text-shadow: 0px 0px 17.7px #E0007F;
}

h3 {
  font-size: 1.5rem;
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
    margin-left: auto;
    margin-right: auto;
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

@media (max-width: 768px) {
  .container-md {
    /* padding-left: 15% !important; */
    overflow: hidden;
  }
}

.yellow-button {
  width: 170px;
  height: 45px;
  background: #FFBD00;
  border: 2px solid #FFBD00;
  border-radius: 62px;
  font-family: 'Alegreya Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #001214;
  position: relative;
  transition: 0.5s;
}

.yellow-button:after {
  content: '»';
  position: absolute;
  opacity: 0;  
  right: -20px;
  transition: 0.5s;
}

.yellow-button:hover{
  padding-right: 24px;
  padding-left:8px;
  border: 2px solid #FFBD00;
  color: #FFBD00;
}

.yellow-button:hover:after {
  opacity: 1;
  right: 20px;
}

</style>
