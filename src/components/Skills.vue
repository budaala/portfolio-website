<template>
    <section id="skills">
        <div class="container-md">
            <h2>Skills</h2>
            <div class="content">
                <div class="skills">
                    <img src="../../public/images/HTML-skill.png" alt="">
                    <img src="../../public/images/CSS-skill.png" alt="">
                    <img src="../../public/images/JS-skill.png" alt="">
                    <img src="../../public/images/Vue-skill.png" alt="">
                    <img src="../../public/images/Bootstrap-skill.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
.content {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

.skills {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;

    width: 1423px;
    height: 375px;

    background: linear-gradient(105.21deg, rgba(224, 0, 127, 0.41) -38.26%, rgba(0, 18, 20, 0.41) 37.86%, rgba(0, 18, 20, 0.41) 57.56%, rgba(224, 0, 127, 0.41) 140.85%);
    /* border: 1px solid #05272B; */
    border-radius: 17px;
    z-index: 0;
}

.skills img {
    /* position: absolute; */
    width: 10vw;
    height: auto;
    z-index: 1;
}

@media screen and (max-width: 768px) {
    .skills {
        width: 100%;
        height: 100%;
    }
    .skills img {
        width: 21vw;
    }
}
</style>