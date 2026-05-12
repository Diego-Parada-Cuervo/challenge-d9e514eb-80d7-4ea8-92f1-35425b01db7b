import { AnyAction } from 'redux';
import { TaskActionTypes } from '../types/taskTypes';

export const createTask = (task: string): AnyAction => ({
  type: TaskActionTypes.CREATE_TASK,
  payload: task,
});

export const editTask = (id: number, task: string): AnyAction => ({
  type: TaskActionTypes.EDIT_TASK,
  payload: { id, task },
});

export const deleteTask = (id: number): AnyAction => ({
  type: TaskActionTypes.DELETE_TASK,
  payload: id,
});

export const completeTask = (id: number): AnyAction => ({
  type: TaskActionTypes.COMPLETE_TASK,
  payload: id,
});