<template>
  <div class="content" v-show="title == selectedTitle">
    <!-- <slot></slot> -->
    <div class="left-side">
      <div class="image-container container">
        <img :src="image" alt="..." />
      </div>
    </div>
    <div class="right-side">
      <div class="title-container container">
        <a
          href="https://www.plcnext-community.net/bee-projects/using-augmented-reality/"
          target="_blank"
          class="title-link"
          ><h3>{{ title }}</h3></a
        >
      </div>
      <div class="description-container container">
        <span id="description">
          <p>
            {{ description }}
          </p>
          <p>Here’s a brief overview of what I did:</p>
          <ul>
            <li v-for="resp in responsibilities" :key="resp">{{ resp }}</li>
          </ul>
        </span>
      </div>
      <div class="tech-stack-container container">
        <img
          v-for="ts in techStack"
          :key="ts"
          :src="ts"
          alt=""
          class="tech-icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import projectsInfo from "../../public/projects/projectsInfo.json";
import {inject} from 'vue'

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const selectedTitle = inject('selectedTitle')
    
    return {
      selectedTitle
    }
  },
  data() {
    return {
      title: projectsInfo[this.id].title,
      description: projectsInfo[this.id].description,
      responsibilities: projectsInfo[this.id].responsibilities,
      techStack: projectsInfo[this.id].techStack,
      image: projectsInfo[this.id].image,
    };
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-evenly;
}

.container {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(224, 0, 127, 0.1);
  border-radius: 20px;
}

.image-container {
  width: 35vw;
  height: 757px;
  margin: 0 20px;

  background: radial-gradient(
    166.84% 135.53% at 96.31% 83.88%,
    rgba(224, 0, 127, 0.25) 43%,
    rgba(255, 189, 0, 0.25) 100%
  );
  /* 
  background: radial-gradient(
      127.23% 186.01% at 104.99% 47.29%,
      rgba(224, 0, 127, 0.25) 43%,
      rgba(255, 189, 0, 0.25) 100%
    ); */
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
}

.image-container img {
  max-height: 95%;
  max-width: 90%;
  /* width: auto; */
  border-radius: 6px;
}

.right-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 35vw;
}

.title-container {
  width: 100%;
  height: 80px;

  background: radial-gradient(
    100% 563.42% at 0% 41.74%,
    rgba(224, 0, 127, 0.25) 43%,
    rgba(255, 189, 0, 0.25) 100%
  );

}

.title-link {
  text-decoration: none;
}

/* .title-link:hover {
} */

.title-link h3 {
  font-size: 2.5rem;
  color: #f5f5f5 !important;
}

.description-container {
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;

  width: 100%;
  height: 550px;

  background: radial-gradient(
    157.61% 114.18% at 106.35% 11.42%,
    rgba(224, 0, 127, 0.25) 43%,
    rgba(255, 189, 0, 0.25) 100%
  );

}

#description {
  /* margin-top: 0;
  padding: 0; */
  overflow: scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 189, 0, 0.25) transparent;
}

.tech-stack-container {
  flex-direction: row;
  justify-content: space-evenly;
  height: 5.5vw;

  background: radial-gradient(
    95.26% 502.26% at 85.7% 135.63%,
    rgba(224, 0, 127, 0.25) 40.26%,
    rgba(255, 189, 0, 0.25) 100%
  );
}

.tech-icon {
  /* width: 50px; */
  height: 3.5vw;
  margin: 10px;
}

@media screen and (max-width: 768px) {
    .content {
      flex-direction: column;
      gap: 10px;
    }
    .container {
      width: 90%;
    }
    .right-side {
      gap: 10px;
    }
}
</style>
