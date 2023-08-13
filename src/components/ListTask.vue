<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de Tarefas</h1>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-primary float-right" @click="taskForm">
          <i class="fa fa-plus mr-2"></i>
          <span>Criar</span>
        </button>
      </div>
    </div>

    <ul class="list-group" v-if="tasks.length > 0">
      <ListItemTask
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @editar="taskSelectForEdit"
      />
    </ul>

    <p v-else>Nenhuma tarefa criada.</p>

    <SaveTask v-if="exhibitForm" :task="taskSelected" />
  </div>
</template>

<script>
import SaveTask from "./SaveTask.vue";
import ListItemTask from "./ListItemTask.vue";

export default {
  components: {
    ListItemTask,
    SaveTask,
  },
  data() {
    return {
      exhibitForm: false,
      taskSelected: undefined,
      tasks: [
        { id: 1, title: "Aprender Vue", completed: true },
        { id: 2, title: "Aprender Vue Router", completed: true },
        { id: 3, title: "Aprender Vuex", completed: false },
      ],
    };
  },
  methods: {
    taskForm() {
      if (this.taskSelected) {
        this.taskSelected = undefined;
        return;
      }
      this.exhibitForm = !this.exhibitForm;
    },
    taskSelectForEdit(task) {
      this.exhibitForm = true;
      this.taskSelected = task;
    },
    reset() {
      this.exhibitForm = false;
      this.taskSelected = undefined;
    },
  },
};
</script>
