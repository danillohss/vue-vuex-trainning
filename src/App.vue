<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Vuex</h1>
        <p class="lead">
          Padrão de Gerenciamento de Estado Centralizado no Vue.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-9 border-right">
          <ListTask />
        </div>
        <div class="col-sm-3">
          <Count />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import ListTask from "./components/ListTask.vue";
export default {
  name: "App",
  components: { Count, ListTask },
};
</script>