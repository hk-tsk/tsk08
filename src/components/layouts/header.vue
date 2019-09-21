<template>
  <div class="app-header">
    <router-link :to="{name:'rootPage'}">صفحه اصلی</router-link>
    
    <UserStatus />
  </div>
</template>

<script>
import UserStatus from "../user/UserStatus";

export default {
  name: "header",
  components: {
    UserStatus
  }
};
</script>