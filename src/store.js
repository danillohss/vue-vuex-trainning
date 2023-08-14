import Vuex from 'vuex';


export default new Vuex.Store({
    state: {
        count: 0,
        tasks: [],
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
    },
    mutations: {
        listingTasks(state, payload) {
            state.tasks = payload
        }
    }
})