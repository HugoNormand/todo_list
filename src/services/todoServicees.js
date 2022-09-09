import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getTodos = instance.get('/todos?userId=1')

export function deleteTodo(id) {
    instance.delete(`/todos/${id}`)
    .then(() => { 
        this.getTodos
        this.$store.commit('removeTodo', id)   
    })
}

export function postTodo() {
    let todo = {
        userId: 1,
        /* Je génère un faux id avec le math.random et math.floor */
        id: Math.floor(Math.random() * 1000),
        title: this.toPush.title,
        completed: this.toPush.completed,
    }
    instance.post('/todos', todo)
    .then(() => {
        this.getTodos
        this.$store.commit('addTodo', todo)
        this.toPush.title = ''
        console.log(todo)
    })
}

export function putTodo(todoToUpdate) {
    let todoUpdated = {
        userId: todoToUpdate.userId,
        id: todoToUpdate.id,
        title: this.newTodoUpdate.title,
        completed: this.newTodoUpdate.completed
    }
    instance.put(`/todos/${todoToUpdate.id}`, todoUpdated)
    .then(() => {
        this.getTodos
        this.$store.commit('updateTodo', todoUpdated)
        this.newTodoUpdate.title =''
    })
}
