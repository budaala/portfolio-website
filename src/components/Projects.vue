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
</style>
