<!-- navbar component -->

<template>
    <nav class="navbar fixed-top navbar-expand-lg" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand" href="#">Alicja Buda</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex" id="right-side">
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <a class="nav-link" href="#projects" :class="{ 'active': isActive === 'projects' }"
                                @click="activate('projects')">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#skills" :class="{ 'active': isActive === 'skills' }"
                                @click="activate('skills')">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact" :class="{ 'active': isActive === 'contact' }"
                                @click="activate('contact')">Contact</a>
                        </li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1jt0gQtkbbyyF7Id8b2iRZlqpoPXMFpqH/view?usp=sharing"
                        target="_blank">
                        <button class="btn yellow-button">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isActive: null
        }
    },
    methods: {
        activate(tab) {
            this.isActive = tab;
        },
        handleScroll() {
            const sections = ['home', 'projects', 'skills', 'contact'];

            for (const section of sections) {
                const element = document.getElementById(section);

                if (element && this.isElementInViewport(element)) {
                    this.activate(section);
                    break;
                }
            }
        },
        isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            return (
                (rect.top >= 0 && rect.top < windowHeight) ||
                (rect.bottom > 0 && rect.bottom <= windowHeight)
            );
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}

</script>

<style scoped>
nav {
    padding: 0px;
    margin: 0px;
    width: 100vw;
}

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

.nav-link {
    color: #F5F5F5;
}

.nav-link.active {
    color: #E0007F;
    /* border-bottom: 1px solid #E0007F; */
    font-weight: bolder;
}

/* 
hr {
    color: #E0007F;
    border: 1px solid rgba(224, 0, 127, 0.4);
    box-shadow: 1px 7px 13.4px #E0007F;
} */
</style>