<template>
  <div class="mt-4">
    <hr />
    <h2 class="font-weight-light">Salvar Tarefa</h2>
    <form @submit.prevent="save">
      <div class="row">
        <div :class="columnClass">
          <div class="form-group">
            <label>Título</label>
            <input
              type="text"
              class="form-control"
              placeholder="Título da tarefa"
              :value="task && task.title"
            />
          </div>
        </div>
        <div class="col-sm-2" v-if="task">
          <div class="form-group">
            <label>Tarefa concluída?</label>
            <button
              type="button"
              class="btn btn-sm d-block"
              :class="buttonClass"
            >
              <i class="fa fa-check"></i>
            </button>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    columnClass() {
      return this.task ? "col-sm-10" : "col-sm-12";
    },
    buttonClass() {
      return this.task && this.task.completed ? "btn-success" : "btn-secondary";
    },
  },
  methods: {
    save() {
      const operation = !this.task ? "criar" : "editar";
      console.log("Operação: ", operation);
    },
  },
  created() {
    if (this.task) {
      console.log(this.$store.getters["tasks/searchTaskId"](this.task.id));
    }
  },
};
</script>
