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
      Tarefas a fazer ({{ tasksIncompleted.length }})
    </h3>

    <ul class="list-group" v-if="tasksIncompleted.length > 0">
      <ListItemTask
        v-for="task in tasksIncompleted"
        :key="task.id"
        :task="task"
        @edit="taskSelectForEdit"
      />
    </ul>

    <p v-else>Nenhuma tarefa a fazer.</p>

    <h3 class="font-weight-light m-4">
      Tarefas Concluidas ({{ tasksCompleted.length }})
    </h3>

    <ul class="list-group" v-if="tasksCompleted.length > 0">
      <ListItemTask
        v-for="task in tasksCompleted"
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
import { mapGetters, mapState } from "vuex";
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
    ...mapGetters([
      "tasksIncompleted",
      "tasksCompleted",
      "totalTasksCompleted",
    ]),
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
  created() {
    this.$store.commit("listingTasks", [
      { id: 1, title: "Aprender Vue", completed: true },
      { id: 2, title: "Aprender Vue Router", completed: true },
      { id: 3, title: "Aprender Vuex", completed: false },
    ]);
  },
};
</script>
