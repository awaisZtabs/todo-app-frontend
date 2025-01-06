import { createStore } from 'vuex';
import TaskService from '../api/TaskService';

export default createStore({
  state: {
    tasks: [],
    loading: false, // Track loading state
    selectedTask: null, // Store the selected task
    error: null     // Store API errors
  },
  getters: {
    getAllTasks(state) {
      return state.tasks;
    },
    isLoading(state) {
      return state.loading;
    },
    getError(state) {
      return state.error;
    },
    getSelectedTask(state) {
      return state.selectedTask; // Get the selected task
    }
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    SET_SELECTED_TASK(state, task) {
      console.log('SET_SELECTED_TASK', task);
      state.selectedTask = task; // Set the selected task
    },
    CLEAR_SELECTED_TASK(state) {
      state.selectedTask = null; // Clear the selected task
    },
    UPDATE_TASK(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1)
      {
        state.tasks[index] = updatedTask;
      }
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
  },
  actions: {
    async fetchTasks({ commit }) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      try
      {
        const response = await TaskService.getTasks();
        commit('SET_TASKS', response.data.data); // Access response.data.data

      } catch (error)
      {
        commit('SET_ERROR', error.response?.data?.message || 'Failed to fetch tasks');
      } finally
      {
        commit('SET_LOADING', false);
      }
    },
    setSelectedTask({ commit }, task) {
      commit('SET_SELECTED_TASK', task);
    },
    clearSelectedTask({ commit }) {
      commit('CLEAR_SELECTED_TASK');
    },
    async addTask({ commit }, task) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      try
      {
        const response = await TaskService.createTask(task);
        commit('ADD_TASK', response.data.data);
      } catch (error)
      {
        commit('SET_ERROR', error.response?.data?.errors || 'Failed to create task');
      } finally
      {
        commit('SET_LOADING', false);
      }
    },
    async deleteTask({ commit }, id) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      try
      {
        await TaskService.deleteTask(id); // Pass task ID
        commit('DELETE_TASK', id); // Remove the task from the state
      } catch (error)
      {
        commit('SET_ERROR', error.response?.data?.message || 'Failed to delete task');
      } finally
      {
        commit('SET_LOADING', false);
      }
    },
    async updateTask({ commit }, { id, task }) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      try
      {
        const response = await TaskService.updateTask(id, task); // Pass task ID and data
        commit('UPDATE_TASK', response.data.data); // Update the task in the state
      } catch (error)
      {
        commit('SET_ERROR', error.response?.data?.errors || 'Failed to update task');
      } finally
      {
        commit('SET_LOADING', false);
      }
    },
  },

});
