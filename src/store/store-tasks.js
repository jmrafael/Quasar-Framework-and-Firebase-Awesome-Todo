import Vue from 'vue' //para poder fazer uso dos objectos
import { uid } from 'quasar'

const state  = {
    //Onde os dados serao armazenados
    tasks: {
        'ID1': {
            name: 'Ir as compras',
            completed: false,
            dueDate: '2019/09/10',
            dueTime: '10:34'
         },
        'ID2': {
             name: 'Passear com a familia',
             completed: false,
             dueDate: '2020/10/22',
             dueTime: '13:55'
         },
         'ID3': {
             name: 'Orar ate orar',
             completed: false,
             dueDate: '2020/01/05',
             dueTime: '21:05'
         }
    }
}

const mutations = {
    //Ira conter metodos que irao manipular os estado. Este metodos nao poderao ser assincronos (que manipulam o estado directamente e instantaneamente)
    updateTask(state, payload) {
        //console.log('payload (from mutations): ', payload);
        //Object.assign() copia as propriedades de um objecto para o outro
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        //console.log('deleted id: ', id)
        Vue.delete(state.tasks, id) //Metodo Vue usado para remover objectos keyed
    },
    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

const actions = {
    //Ira conter metodos qe poderao ser assicronos, que buscam dados no servidor directamente
    updateTask({ commit }, payload) {
        //payload server para buscar o ID
        //commit server para invocar uma mutation
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        //commit('deleteTask', id)
        commit('deleteTask', id)
    },
    addTask({ commit }, task ) {
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
}

const getters = {
    //Objecto para buscar dados do estados, para ser usados, e manipular os dados no estado para 
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    //Usado para exportar todos os objectos
    namespaced: true, // permite ter multiplos armazenamentos de dados na app
    state,
    mutations,
    actions,
    getters
}