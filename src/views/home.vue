<template>
  <Header />
  <div class="block-todo">
    <div class="today-todo"><h2>Today</h2></div>
    <main class="todo">
      <section v-for="todo in todos" class="todo__task">
        <button @click="doneTaskAnimation(todo)" class="todo__task__btn">
          <i class="fa-solid fa-circle-check todo__task__btn--notDone"></i>
        </button>
        <p v-if="todo.title" :class="{ done: todo.completed }" id="todoTitle">{{ todo.title }}</p>
        <form v-else>
          <label for="">
            <input type="text" v-model="this.newTodoUpdate.title" class="todo__task__input">
          </label>
          <button @click.prevent="putTodo(todo)" class="todo__task__btn"><i class="fa-solid fa-arrow-up"></i></button>
        </form>
        <button @click="deleteTodo(todo.id)" class="todo__task__btn"><i class="fa-solid fa-trash"></i></button>
        <button @click="Toggle(todo)" class="todo__task__btn"><i class="fa-solid fa-arrows-rotate"></i></button>
      </section>  
    </main>
    <form class="form-add">
      <label for="">
        <input type="text" v-model="this.toPush.title">
      </label>
      <button @click.prevent="postTodo">Send</button>
    </form>
  </div>
  <i class="fa-solid fa-arrow-down scroll-arrow"></i>
</template>

<script>
import { mapState } from "vuex";
import { getTodos, deleteTodo, postTodo, putTodo } from '../services/todoServicees'
import Header from '../components/header.vue'

export default {
  components: {
   Header
  },

  computed: mapState(['todos']),

  created() {
    this.$store.dispatch('fetchTodos')
    getTodos
  }, 
  data() {
    return {
      toPush: {
        title: '',
        completed: false
      },
      Todos: [],
      newTodoUpdate: {
        title: '',
        completed: false
      },
    }
  },  

  methods: {  
    deleteTodo,
    postTodo,
    putTodo,
    doneTaskAnimation(todo) {
      todo.completed = !todo.completed
    },
    Toggle(todo) {
      todo.title = !todo.title
    },
  }
}  
</script>

<style lang="scss"> 
@import '../assets/shared.scss';
  .block-todo {
    font-family: $font;
    margin-top: 70px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
  }

  .today-todo {
    @extend .flexbox;
    @extend .blockSize;
    font-size: 20px;
    font-weight: bold;
    background-color: $primary-color;
    border-radius: 15px 15px 0px 0px;
    z-index: 10000;
  }

  .todo {
    background-color: $primary-color;
    @extend .flexbox;
    @extend .blockSize;
    flex-direction: column;
    height: 500px;
    overflow: scroll;
    :hover {
      background-color: $secondary-color;
      }
      &__task {
      width: 90%;
      height: 90px;
      margin: 10px;
      padding: 15px;
      border: solid 1px rgb(73, 73, 73);
      border-radius: 30px;
      display: flex;
      justify-content: flex-start;
        p {
          width: 70%;
          margin-left: 8px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          align-self: center;
        }
        &__input {
          color: $quaternaire-color;
          transition: all 0.3s 
        }
        &__btn {
          @extend .btnStyle;
          :hover {
            color: $tertiary-color;
            transform: rotate(30deg);
            transition: transform 0.5s;
          }
          &--notDone {
            font-size: 20px;
            transition: all 0.3s;
          }
        }
        button:nth-child(3) {
          margin-left: auto;
        }
      }
  }

  .done {
    text-decoration: line-through;
    text-decoration-color: $quaternaire-color
  }

  .form-add {
    @extend .flexbox;
    @extend .blockSize;
    justify-content: center;
    background-color: $primary-color;
    border-radius: 0px 0px 15px 15px;
    border: solid 1px white;
  }

  .scroll-arrow {
    font-size: 50px;
    color: $tertiary-color;
    position: fixed;
    bottom: 10px;
    right: 14px
  }
</style>
