<template>
  <section id="contact">
    <div class="container-md">
      <h2>Get in touch!</h2>
      <div class="content">
        <div class="row">
          <div class="col s-m">
            <!-- <h3>Links</h3> -->
            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/budaalicja/"
                target="_blank"
                class="s-link"
              >
                <div class="icon-container">
                  <FontAwesomeIcon
                    class="icon"
                    id="linkedin-icon"
                    :icon="['fab', 'linkedin-in']"
                  />
                </div>
                LinkedIn</a
              >
              <a
                href="https://github.com/budaala"
                target="_blank"
                class="s-link"
              >
                <div class="icon-container">
                  <FontAwesomeIcon class="icon" :icon="['fab', 'github']" />
                </div>
                GitHub
              </a>
              <a
                href="mailto:budaala4@gmail.com"
                target="_blank"
                class="s-link"
              >
                <div class="icon-container">
                  <FontAwesomeIcon class="icon" :icon="['fas', 'envelope']" />
                </div>
                Mail</a
              >
            </div>
          </div>
          <div class="col">
            <!-- <h3>Contact form</h3> -->
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              class="contact"
            >
              <input
                type="hidden"
                name="access_key"
                value="3b809b23-1159-47c6-bf80-61ed818f6b1f"
              />
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                class="contact-inputs"
                required
              />
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                class="contact-inputs"
                required
              />
              <label for="message">Your message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                class="contact-inputs-text"
                required
              ></textarea>
              <div class="button-container">
                <button class="btn yellow-button" type="submit">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
.col {
  display: flex;
  justify-content: space-between;
}

.s-m {
  justify-content: center;
}

.social-links {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.s-link {
  font-size: 30px;
  letter-spacing: 0.05em;
  color: #f5f5f5;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 50px;
}

.s-link .icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 34px 25px;
  gap: 10px;

  /* width: 150px; */
  width: 100px;
  /* height: 143px; */
  height: 95px;
  background: rgba(224, 0, 127, 0.1);
  border: 1px solid rgba(224, 0, 127, 0.4);
  box-shadow: 0px 0px 154.1px 10px rgba(224, 0, 127, 0.4);
  border-radius: 200px;
}

.icon {
  font-size: 100px !important;
  color: #f5f5f5;
}

#linkedin-icon {
  font-size: 100px !important;
}

.icon:hover {
  color: rgba(224, 0, 127, 0.4);
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.contact-inputs,
.contact-inputs-text {
  /* width: 100%; */
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

.contact-inputs:focus,
.contact-inputs-text:focus {
  background-color: #f5f5f5;
  /* color: rgba(224, 0, 127, 0.1); */
}

.button-container {
  margin-left: auto;
}

@media screen and (max-width: 768px) {
  .s-m {
    margin: 0;
  }
  .row {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .social-links {
    gap: 10px;
  }

  .contact {
    width: 100%;
  }

  .contact-inputs,
  .contact-inputs-text {
    width: 100%;
  }
}
</style>
