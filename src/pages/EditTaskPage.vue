<template>
  <div>
      <h2>Edit Task</h2>
      <TaskForm v-if="task" :task="task" @submit="updateTask" />
      <p v-else>Loading...</p>
  </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue';
import TaskService from '../api/TaskService';
export default {
    components: { TaskForm },
    data() {
        return {
            task: null // Task data initialized to null
        };
    },
    methods: {
        async fetchTask() {
            const taskId = this.$route.params.id;
            const response = await TaskService.getTaskById(taskId);
            this.task = response.data.data; // Assign fetched task
            console.log(this.task);
        },
        async updateTask(updatedTask) {
            const taskId = this.$route.params.id;
            await TaskService.updateTask(taskId, updatedTask); // Update task
            this.$router.push('/'); // Navigate to home
        }
    },
    async created() {
        // If task is passed via router state, use it
        if (this.$route.state?.task) {
            this.task = this.$route.state.task;
        } else {
            // Otherwise, fetch task from API
            await this.fetchTask();
        }
    }
};
</script>
