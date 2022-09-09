import axios from 'axios'
import { createStore } from 'vuex'
import { getTodos } from '../services/todoServicees'

export default createStore({
    state: {
        todos: []
    },
    getters: {
    },
    actions: {
        fetchTodos({commit}) {
            const data =  getTodos
            .then(result => {
                commit('addTodos', result.data)    
            })                 
        }
    },
    mutations: {
        /* les méthodes utilisées dans le store pour "fake" l'API, les mutations ici permettent d'avoir les fonctionnalités */
        addTodos(state, todos) {
            state.todos = todos
        },
        getTodos(state) {
            return state.todos
        },
        removeTodo(state, todoId) {
            state.todos = state.todos.filter((todo) => todo.id !== todoId)
        },
        addTodo(state, todoToPush) {
            state.todos = [todoToPush, ...state.todos ]
        },
        updateTodo(state, todoToUpdate) {
            const index = state.todos.findIndex((todo) => todo.id == todoToUpdate.id)
            state.todos[index] = todoToUpdate
        }
    },
    modules: {
    }
})