<template>
  <div id="app-0630">
    <!-- Component changes when currentTabComponent changes -->
    <component v-bind:is="currentLayout"></component>
  </div>
</template>

<script>
import template from "./layouts/template";
import "../styles/app.scss";

export default {
  name: "app",
  components: {
    template
  },
  computed: {
    currentLayout() {
      return template;
    }
  }
};
</script>

