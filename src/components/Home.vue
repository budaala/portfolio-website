<template>
    <a name="home">
        <div class="container-md" id="home">
            <h1 class="mb-0">Frontend Developer</h1>
            <h3 class="mb-5">Alicja Buda</h3>
            <div class="photo-container">
                <div class="auto-layout">
                    <div class="photo-frame">
                        <div class="auto-layout">
                            <div class="pink-glow"></div>
                            <div class="photo"></div>
                        </div>
                    </div>
                    <div class="smoothing-shadow"></div>
                </div>
            </div>
            <div class="col-10 col-md-6 mb-4">
                <p>As a computer science student, I fully understand the importance of passion and attention to detail when
                    creating projects. I thrive on both the creative aspect and logical thinking required in this field.
                </p>
            </div>
            <a href="#contact"><button  class="btn yellow-button">Contact me!</button></a>
        </div>
    </a>
</template>

<script setup>

</script>

<style scoped>
/* Photo container */
.photo-container {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    isolation: isolate;

    position: absolute;
    width: 554px;
    height: 545px;
    left: 58%;
    top: 17%;
    z-index: 100 !important;
}

/* Auto layout */
.auto-layout {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;
    isolation: isolate;
}

/* Photo frame */
.photo-frame {
    width: 500px;
    height: 500px;

    /* Pink glow */
    background: radial-gradient(50% 50% at 50% 50%, #E0007F 0%, #001214 100%);
}

/* Pink glow */
.pink-glow {
    width: 500px;
    height: 500px;
}

/* Photo */
.photo {
    position: absolute;
    width: 385px;
    height: 385px;
    left: 57px;
    top: 58px;
    border-radius: 50%;
    background: url(../images/profile-photo.png) center/contain no-repeat;
}

/* Smoothing shadow */
.smoothing-shadow {
    position: absolute;
    width: 488px;
    height: 173px;
    left: 6px;
    top: 327px;
    background: linear-gradient(360deg, #001214 0%, rgba(0, 18, 20, 0) 100%);
}
</style>