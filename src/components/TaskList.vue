<template>
  <ul class="task-list">
    <!-- if no tasks show message -->
    <li v-if="tasks.length === 0">No tasks found</li>
      <li v-for="task in tasks" :key="task.id">
          <div>
              <strong>{{ task.task }}</strong>
              <p>{{ task.description }}</p>
          </div>
          <div>
              <button @click="$emit('edit', task)" class="btn-edit">Edit</button>
              <button @click="$emit('delete', task.id)" class="btn-delete">Delete</button>
          </div>
      </li>
  </ul>
</template>

<script>
export default {
  props: {
      tasks: {
          type: Array,
          required: true
      }
  }
};
</script>

<style scoped>
.btn-edit {
  background-color: #ffc107;
}

.btn-edit:hover {
  background-color: #e0a800;
}

.btn-delete {
  background-color: #dc3545;
}

.btn-delete:hover {
  background-color: #c82333;
}
</style>
