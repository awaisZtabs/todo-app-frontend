<template>
  <div v-if="isLoading" class="loader-overlay">
      <div class="spinner"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
      ...mapGetters(['isLoading'])
  }
};
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}
</style>
