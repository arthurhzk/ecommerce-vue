<template>
  <div v-if="item">
    <h1>{{ item.title }}</h1>
    <img :src="item.image" />
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
import items from "@/data/items.js";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      item: items.find((item) => item.id == this.$route.params.id),
    };
  },
};
</script>
