import Vuex from 'vuex';


export default new Vuex.Store({
    state: {
        count: 0,
        tasks: [
            { id: 1, title: "Aprender Vue", completed: true },
            { id: 2, title: "Aprender Vue Router", completed: true },
            { id: 3, title: "Aprender Vuex", completed: false },
        ],
    },
    getters: {
        tasksCompleted(state) {
            return state.tasks.filter((t) => t.completed);
        },
        tasksIncompleted(state) {
            return state.tasks.filter((t) => !t.completed);
        },
        totalTasksCompleted(getters) {
            return getters.tasksCompleted.length;
        },
        searchTaskId(state) {
            return (id) => {
                return state.tasks.find(t => t.id === id);
            };
        },
    }
})