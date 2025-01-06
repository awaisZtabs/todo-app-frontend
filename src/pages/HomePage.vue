<template>
  <div class="home-page">
    <Loader />
      <header>
          <h1>To-Do App</h1>
          <p>Manage your tasks efficiently</p>
      </header>
      <TaskForm @submit="addTask" />
      <TaskList :tasks="tasks" @edit="editTask" @delete="deleteTask" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';
import Loader from '../components/Loader.vue';

export default {
  components: { TaskForm, TaskList,Loader },
  computed: {
      ...mapGetters(['getAllTasks']),
      tasks() {
          return this.getAllTasks;
      }
  },
  methods: {
    ...mapActions(['fetchTasks', 'addTask', 'deleteTask', 'setSelectedTask']),
    editTask(task) {
        this.setSelectedTask(task); // Save the task in Vuex

        this.$router.push({ path: `/edit/${task.id}` }); // Navigate to the edit page
    }

  },
  created() {
      this.fetchTasks();
  }
};
</script>
