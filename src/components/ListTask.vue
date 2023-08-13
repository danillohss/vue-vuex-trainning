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

    <h3 class="font-weight-light m-4">
      Tarefas a fazer ({{ $store.getters.tasksIncompleted.length }})
    </h3>

    <ul class="list-group" v-if="$store.getters.tasksIncompleted.length > 0">
      <ListItemTask
        v-for="task in $store.getters.tasksIncompleted"
        :key="task.id"
        :task="task"
        @edit="taskSelectForEdit"
      />
    </ul>

    <p v-else>Nenhuma tarefa a fazer.</p>

    <h3 class="font-weight-light m-4">
      Tarefas Concluidas ({{ $store.getters.tasksCompleted.length }})
    </h3>

    <ul class="list-group" v-if="$store.getters.tasksCompleted.length > 0">
      <ListItemTask
        v-for="task in $store.getters.tasksCompleted"
        :key="task.id"
        :task="task"
        @edit="taskSelectForEdit"
      />
    </ul>

    <p v-else>Nenhuma tarefa a fazer.</p>

    <SaveTask v-if="exhibitForm" :task="taskSelected" />
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    };
  },
  computed: {
    ...mapState(["tasks"]),
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
