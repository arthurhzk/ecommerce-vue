<template>
  <the-nav></the-nav>

  <router-view></router-view>
</template>

<script>
import TheNav from "@/components/TheNav.vue";

export default {
  components: {
    TheNav,
  },
};
</script>
