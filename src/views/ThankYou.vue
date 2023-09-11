<template>
  <div>
    <h1>Agradecemos pela sua compra!</h1>
    <p>Detalhes do Pedido:</p>
    <ul>
      <div v-for="(item, index) in orderDetails" :key="index">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
        <p>Valor: R$ {{ item.price }}</p>
        <p>Quantidade: {{ item.quantity }}</p>
      </div>
    </ul>
    <p>Total: R$ {{ total }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderDetails: [],
      total: 0,
    };
  },
  mounted() {
    const dataString = this.$route.query.data;
    const data = JSON.parse(dataString);
    this.orderDetails = data;
    this.total = data.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTimeout(() => {
      this.$router.push("/");
    }, 8000);
  },
};
</script>

<style scoped></style>
