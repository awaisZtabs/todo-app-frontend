<template>
  <form @submit.prevent="submitForm" class="task-form">
      <div>
          <label for="task">Task</label>
          <input v-model="form.task" id="task" placeholder="Enter task" required />
      </div>
      <div>
          <label for="description">Description</label>
          <textarea v-model="form.description" id="description" placeholder="Enter description"></textarea>
      </div>
      <button type="submit">Save</button>
  </form>
</template>

<script>
export default {
  props: {
      task: {
          type: Object,
          default: () => ({ task: '', description: '' })
      }
  },
  emits: ['submit'],
  data() {
      return {
          form: { ...this.task } // Clone the task prop
      };
  },
  methods: {
      submitForm() {
          console.log('submitForm called:', this.form); // Debug log
          this.$emit('submit', this.form); // Emit only once
      }
  }
};
</script>
