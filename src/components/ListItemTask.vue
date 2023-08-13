<template>
  <li class="list-group-item d-flex">
    <span>{{ task.title }}</span>
    <span class="space"></span>
    <button
      class="btn btn-sm mr-4"
      :class="classCSS"
      :title="buttonTextCompleted"
    >
      <i class="fa fa-check"></i>
    </button>
    <button
      class="btn btn-primary btn-sm mr-1"
      title="Editar"
      @click="$emit('edit', task)"
    >
      <i class="fa fa-pencil-alt"></i>
    </button>
    <button class="btn btn-danger btn-sm" title="Deletar">
      <i class="fa fa-trash"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    classCSS() {
      return {
        "btn-secondary": !this.task.completed,
        "btn-success": this.task.completed,
      };
    },
    buttonTextCompleted() {
      return this.task.completed ? "Refazer Tarefa" : "Concluir Tarefa";
    },
  },
};
</script>

<style scoped>
.space {
  flex: 1 1 auto;
}
</style>
