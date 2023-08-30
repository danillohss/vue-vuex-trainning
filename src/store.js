import Vuex from 'vuex';

const countModule = {
    state: {
        count: 0,
    }
}

const tasksModule = {
    state: {
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
        searchTaskId: (state) => (id) => {
            return state.tasks.find(t => t.id === id);
        },
    },
    mutations: {
        listingTasks(state, payload) {
            state.tasks = payload;
        },
    },
    actions: {
        //Actions são bem parecidas com mutations porém é nela que usamos códigos assincronos como por exemplo uma reequisição ao backend, apoós a requisição ser feita chamamos
        //a mutation atravez do commit e passamos os dados recebidos do backend e a mutation altera o estado centralizado, esse é o caminho correto
        loadingTasks(context, payload) {
            context.commit('listingTasks', payload);
        }
    }
}


const store = new Vuex.Store({
    modules: {
        count: countModule,
        tasks: tasksModule,
    }
});

export default store;