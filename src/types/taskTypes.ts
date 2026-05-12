export enum TaskActionTypes {
  CREATE_TASK = 'CREATE_TASK',
  EDIT_TASK = 'EDIT_TASK',
  DELETE_TASK = 'DELETE_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
}

export interface Task {
  id: number;
  task: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
}