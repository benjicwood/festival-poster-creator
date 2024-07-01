<template>
  <div class="side-bar">
    <div>
      <form
        action="https://formspree.io/f/mrgvnljn"
        method="POST"
        class="email-box"
      >
        <!-- <label class="input-box">
          <p style="margin: 0">Your email:</p>
          <input type="email" name="email" />
        </label> -->

        <label class="input-box">
          <p style="margin: 0; font-size: 1.2rem; font-weight: bold;">Suggest a logo!</p>
          <p style="font-size: 0.8rem; margin: 0">
            Let me know if i've missed someone, or give other
            feedback/suggestions
          </p>

          <textarea name="message"></textarea>
        </label>

        <!-- your other form fields go here -->
        <button type="submit" class="send-button">Send</button>
        <p style="font-size: 0.7rem">
          <!-- thanks! temporarily disabled while I catch up (on the sensible requests at least 😉) -->
          warning - pressing send will leave the page
        </p>
        <!-- <p style="font-size: 0.8rem; margin: 1rem">
          I've hit the monthly limit! Thanks for the responses so far, will reopen it when it allows me to.
        </p>
        <p style="font-size: 0.6rem; margin: 0 20px">
          email bencharlwood@gmail.com with any other questions, some were asked but with no way to respond
        </p> -->
      </form>
    </div>
    <!-- <button @click="addConfirmed">add confirmed bands</button> -->
    <div>
      <iframe
        id="kofiframe"
        src="https://ko-fi.com/benjicwood/?hidefeed=true&widget=true&embed=true&preview=true"
        style="border: none; width: 100%; padding: 4px; background: #f9f9f9"
        height="712"
        title="benjicwood"
      ></iframe>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: "SidePanel",
  data() {
    return {
      showBar: false,
    };
  },
  methods: {
    // addConfirmed() {
    //   this.bandPosition.fridayHeadliner = 'qotsa'
    //   this.bandPosition.saturdayHeadliner = 'fob'
    //   this.bandPosition.sundayHeadliner = 'a7x'
    //   console.log('hello')
    // },
  }
};
</script>

<style scoped lang="scss">
// .show-bar {
//     visibility: hidden;
// }
@media screen and (max-width: 992px) {
  .side-bar {
    display: none;
  }
}

.side-bar {
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  width: 25%;
  margin: 0 auto;
}
.email-box {
  background-color: white;
  text-align: center;
  //   width: 330px;
  padding-top: 5px;
}
.input-box {
  display: flex;
  flex-direction: column;
  input,
  textarea {
    width: 80%;
    margin: auto;
  }
}
.send-button {
    background-color: #ff5f5f29 !important;
    color: #ff5f5f !important;
    border: 2px solid #ff5f5f14 !important;
    border-radius: 100px!important;
    padding: 5px 10px;
    margin-top: 5px;
}
</style>