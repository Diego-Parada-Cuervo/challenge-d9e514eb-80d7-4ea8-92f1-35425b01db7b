import { createSlice } from '@reduxjs/toolkit';
import { TaskState, TaskActionTypes } from '../types/taskTypes';

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    [TaskActionTypes.CREATE_TASK](state, action) {
      state.tasks.push({ id: Date.now(), task: action.payload, completed: false });
    },
    [TaskActionTypes.EDIT_TASK](state, action) {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) {
        task.task = action.payload.task;
      }
    },
    [TaskActionTypes.DELETE_TASK](state, action) {
      state.tasks = state.tasks.filter(task => task.id!== action.payload);
    },
    [TaskActionTypes.COMPLETE_TASK](state, action) {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        task.completed = true;
      }
    },
  },
});

export const { createTask, editTask, deleteTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;