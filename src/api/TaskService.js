import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';


export default {
  getTasks() {
    return axios.get(`${API_URL}/tasks`); // GET all tasks
  },
  getTaskById(id) {
    return axios.get(`${API_URL}/task/${id}`); // GET a task by ID
  },
  createTask(task) {
    return axios.post(`${API_URL}/task`, task); // POST create a new task
  },
  updateTask(id, task) {
    return axios.put(`${API_URL}/task/${id}`, task); // PUT update a task
  },
  deleteTask(id) {
    return axios.delete(`${API_URL}/task/${id}`); // DELETE a task by ID
  }
};
