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
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
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
    ...mapGetters("tasks", [
      "tasksCompleted",
      "tasksIncompleted",
      "totalTasksCompleted",
    ]),
  },
  //Ao mapear a mutation como estamos fazendo na linha abaixo é possível descartar o método commit pra fazer o evento pro nosso state do vuex
  //Fazendo isso podemos chamar a mutation como uma função na linha 95
  methods: {
    ...mapMutations("tasks", ["listingTasks"]),
    ...mapActions("tasks", {
      loadingTasks: "loadingTasks",
    }),
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

  //Método commit é usado para chamar mutations
  //Método dispatch é usado para chamar actions

  created() {
    //Aqui chamamos a nossa action, onde nela fazemos um código assincrono, só devemos fazer um código assincrono através das actions
    this.loadingTasks([
      { id: 1, title: "Aprender Vue", completed: false },
      { id: 2, title: "Aprender Vue Router", completed: false },
      { id: 3, title: "Aprender Vuex", completed: true },
    ]);

    //Aqui chamamos a nossa mutation, onde nela fazemos um código sincrono, só devemos fazer um código sincrono através das mutations
    this.listingTasks([
      { id: 1, title: "Aprender Vue", completed: false },
      { id: 2, title: "Aprender Vue Router", completed: false },
      { id: 3, title: "Aprender Vuex", completed: true },
    ]);
  },
};
</script>
