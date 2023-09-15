<template>
  <the-nav></the-nav>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script lang="ts">
import TheNav from "@/components/TheNav.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheNav,
    TheFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
