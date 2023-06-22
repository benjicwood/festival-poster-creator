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
          warning - pressing send will leave the page
        </p>
      </form>
    </div>
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