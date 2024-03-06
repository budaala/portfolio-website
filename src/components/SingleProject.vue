<template>
  <div class="content">
    <div class="left-side">
      <div class="image-container container">
        <img src="../images/beeHiveAR.png" alt="..." />
      </div>
    </div>
    <div class="right-side">
      <div class="title-container container">
        <a
          href="https://www.plcnext-community.net/bee-projects/using-augmented-reality/"
          target="_blank"
          class="title-link"
          ><h3>Beehyve</h3></a
        >
      </div>
      <div class="description-container container">
        <p>
          I contributed to the Beehyve project, by creating an AR experience for
          the beehive. The hive has sensors on it, which send the live data to
          the cloud. The data is then fetched and displayed in the experience.
          The goal of the project was to show the data in a more interactive
          way, to make it easier to understand for the user.
        </p>
        <p>Here’s a brief overview of what I did:</p>
        <ul>
          <li>fetched the data and displayed it in the experience</li>
          <li>
            showed the variance of the temperature in different parts of the
            hive, to emphasize with color where is the majority of the bees
            (where the temperature is the highest)
          </li>
          <li>created buttons to show and hide all the data</li>
          <li>created charts to show the development of the measurements</li>
        </ul>
      </div>
      <div class="tech-stack-container container">
        <img src="../images/angularjs.png" alt="" class="tech-icon" />
        <img src="../images/vuforia.png" alt="" class="tech-icon" />
      </div>
    </div>
  </div>
</template>

<script></script>

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
  width: 624px;
  height: 757px;
  /* margin: 0 20px; */

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
  height: 95%;
  width: auto;
  border-radius: 6px;
}

.right-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.title-container {
  width: 591px;
  height: 90px;

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

  width: 591px;
  height: 507px;

  background: radial-gradient(
    157.61% 114.18% at 106.35% 11.42%,
    rgba(224, 0, 127, 0.25) 43%,
    rgba(255, 189, 0, 0.25) 100%
  );
}

.tech-stack-container {
  flex-direction: row;
  justify-content: space-evenly;
  width: 591px;
  height: 126px;

  background: radial-gradient(
    95.26% 502.26% at 85.7% 135.63%,
    rgba(224, 0, 127, 0.25) 40.26%,
    rgba(255, 189, 0, 0.25) 100%
  );
}

.tech-icon {
  width: 50px;
  height: 50px;
  margin: 10px;
}
</style>
