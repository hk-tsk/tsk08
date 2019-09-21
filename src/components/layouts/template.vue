<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<script>
import Header from "./header";
import Footer from "./footer";
export default {
  name: "template",
  components: {
    Header,
    Footer
  }
};
</script>