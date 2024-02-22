<template>
    <div class="container-md">
        <h2>Contact</h2>
        <div class="content">
            <div class="row">
                <div class="col">
                    <!-- <h3>Links</h3> -->
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/budaalicja/" target="_blank" class="s-link"><img
                                src="../images/linkedin.svg">LinkedIn</a>
                        <a href="https://github.com/budaala" target="_blank" class="s-link"><img
                                src="../images/github.svg">GitHub</a>
                        <a href="mailto:budaala4@gmail.com" target="_blank" class="s-link"><img
                                src="../images/mail.svg">Mail</a>
                    </div>
                </div>
                <div class="col">
                    <!-- <h3>Contact form</h3> -->
                    <form action="https://api.web3forms.com/submit" method="POST" class="contact">
                        <input type="hidden" name="access_key" value="3b809b23-1159-47c6-bf80-61ed818f6b1f">
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Name" class="contact-inputs" required>
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="Email" class="contact-inputs" required>
                        <label for="message">Your message</label>
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Message" class="contact-inputs-text"
                            required></textarea>
                        <div class="button-container">
                            <button class="btn yellow-button" type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.container-md {
    padding-bottom: 300px;
}
.col {
    display: flex;
    justify-content: space-between;
}

.social-links {
    display: flex;
    flex-direction: column;
}

.s-link {
    font-size: 30px;
    letter-spacing: 0.05em;
    color: #f5f5f5;
    text-decoration: none;
}

.s-link img {
    width: 200px;
    height: 200px;
    object-fit: fill !important;
}

.contact {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.contact-inputs,
.contact-inputs-text {
    width: 100%;
    padding: 10px;
    font-size: 20px;
    letter-spacing: 0.05em;

    width: 542px;
    height: 67px;

    background: rgba(224, 0, 127, 0.1);
    border: 1px solid rgba(224, 0, 127, 0.8);
    border-radius: 16px;
    margin-bottom: 25px;
}

.contact-inputs-text {
    height: auto;
    margin-bottom: 30px;
}
.contact-inputs:focus, .contact-inputs-text:focus {
    background-color: #f5f5f5;
    /* color: rgba(224, 0, 127, 0.1); */
}

.button-container {
    margin-left: auto;
}

</style>