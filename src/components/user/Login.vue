<template>
  <div class="login-container">
    <div class="form-group">
      <label>نام کاربری:</label>
      <input v-model="username" />
    </div>
    <div class="form-group">
      <label>رمزعبور:</label>
      <input v-model="password" type="password" />
    </div>
    <div class="form-group">
      <input type="button" value="ورود" @click="loginEventHandler" />
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      password: "",
      username: ""
    };
  },
  // computed: {
  //   username: {
  //     get() {
  //       return this.$store.state.user.userName;
  //     },
  //     set(value) {
  //       this.$store.commit("setUserInfo", value);
  //     }
  //   }
  // },
  methods: {
    loginEventHandler() {
      this.$store.dispatch("doAuthorized", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>