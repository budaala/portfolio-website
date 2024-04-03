<template>
  <section id="projects">
    <div class="container-md">
      <h2>Projects</h2>
      <TabsWrapper>
        <SingleProject title="Beehyve" :id="0" />
        <SingleProject title="Zesty" :id="1" />
        <SingleProject title="KoalaSchool" :id="2" />
      </TabsWrapper>
    </div>
  </section>
</template>

<script>
import SingleProject from "./SingleProject.vue";
import TabsWrapper from "./TabsWrapper.vue";

export default {
  components: {
    SingleProject,
    TabsWrapper,
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
