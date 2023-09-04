import Vuex from 'vuex';

const countModule = {
    /** A principal função do "namespaced" é evitar conflitos de nomes entre os módulos, o que é especialmente útil em aplicativos maiores ou complexos, 
     * nos quais múltiplos desenvolvedores podem estar trabalhando em diferentes partes do estado global. */
    // No mapeamento também é necessário especificar o modulo como está na linha 67 do arquivo 'ListTask' por exemplo, onde o módulo 'task' é especificado
    namespaced: true,
    state: {
        count: 0,
    },
    getters: {
        currentCount: state => state.count
    }
}

const tasksModule = {
    namespaced: true,
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

console.log(store)

export default store;