<template>
  <div>
    <h2 class="font-weight-light">Contador: {{ count }}</h2>
  </div>
  <button class="btn btn-lg btn-danger m-2" @click="decrement">-</button>
  <button class="btn btn-lg btn-success" @click="increment">+</button>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CONTADOR",
  methods: {
    decrement() {
      this.$store.state.count.count--;
    },
    increment() {
      this.$store.state.count.count++;
    },
  },
  computed: mapState({
    count: (state) => state.count.count,
  }),
};
</script>