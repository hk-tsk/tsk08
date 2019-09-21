<template>
  <div>
    <span v-if="authorized">{{username}}</span>
    <span v-else><router-link :to="{name:'loginPage'}">ورود</router-link></span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "userStatus",
  computed: {
    ...mapGetters({ username: "getUserName", authorized: "isAuthorized" })
  }
};
</script>