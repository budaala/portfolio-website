<!-- navbar component -->
<template>
    <nav class="navbar fixed-top navbar-expand-lg" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand" href="#">Alicja Buda</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex" id="right-side">
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <a class="nav-link" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#skills">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1yZqvEKBq5G3JtPNyIn3wf2b1aDW52Wr7/view?usp=sharing" target="_blank">
                        <button class="btn yellow-button">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

</script>

<style scoped>
.navbar {
    background-color: #001214 !important;
    border-bottom: solid 1px rgba(224, 0, 127, 0.4);
    box-shadow: 0px 0.5px 30px #e0007f65;
}

.navbar-brand {
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 0.01em;
    color: #F5F5F5;
    text-shadow: 0px 4px 5.1px rgba(224, 0, 127, 0.8);
}

#right-side {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 50px;
}

.navbar-nav {
    gap: 20px;
}

/* 
hr {
    color: #E0007F;
    border: 1px solid rgba(224, 0, 127, 0.4);
    box-shadow: 1px 7px 13.4px #E0007F;
} */
</style>