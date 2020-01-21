const state  = {
    //Onde os dados serao armazenados
    tasks: {
        'ID1': {
            name: 'Ir as compras',
            completed: false,
            duedate: '2019/09/10',
            duetime: '10:34'
        },
        'ID2': {
            name: 'Passear com a familia',
            completed: false,
            duedate: '2020/10/22',
            duetime: '13:55'
        },
        'ID3': {
            name: 'Orar ate orar',
            completed: false,
            duedate: '2020/01/05',
            duetime: '21:05'
        }
    }
}

const mutations = {
    //Ira conter metodos que irao manipular os estado. Este metodos nao poderao ser assincronos (que manipulam o estado directamente e instantaneamente)
}

const actions = {
    //Ira conter metodos qe poderao ser assicronos, que buscam dados no servidor directamente
    updateTask () {
        console.log('updateTask action')
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