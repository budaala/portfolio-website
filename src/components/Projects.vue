<template>
  <section id="projects">
    <div class="container-md">
      <h2>Projects</h2>
      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <SingleProject :id="0"/>
          </div>
          <div class="carousel-item">
            <SingleProject :id="1" />
          </div>
          <div class="carousel-item">
            <SingleProject :id="2" />
          </div>
        </div>
        <div class="buttons">
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleProject from "./SingleProject.vue";

export default {
  components: {
    SingleProject,
    },
};
</script>

<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid #e0007f;
  border-radius: 26px;
}

.carousel-control-prev {
  margin-left: -7vw;
}
.carousel-control-next {
  margin-right: -7vw;
}

</style>
