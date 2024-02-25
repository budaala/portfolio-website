<template>
    <a name="skills">
        <div class="container-md">
            <h2>Skills</h2>
            <div class="content">
                <div class="skills">
                    <img src="../images/hard skills.svg" alt="">
                </div>
            </div>
        </div>
    </a>
</template>

<script>

</script>

<style scoped>
.content {
    display: flex;
    justify-content: center;
    width: 100%;
}

.skills {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1423px;
    height: 675px;

    background: linear-gradient(105.21deg, rgba(224, 0, 127, 0.41) -38.26%, rgba(0, 18, 20, 0.41) 37.86%, rgba(0, 18, 20, 0.41) 57.56%, rgba(224, 0, 127, 0.41) 140.85%);
    border: 1px solid #05272B;
    border-radius: 17px;
    z-index: 0;
}

.skills img {
    position: absolute;
    width: 1000px;
    z-index: 1;
}
</style>