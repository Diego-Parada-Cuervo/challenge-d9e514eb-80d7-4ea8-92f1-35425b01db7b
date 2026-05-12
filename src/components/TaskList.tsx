import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { createTask, editTask, deleteTask, completeTask } from '../actions/taskActions';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    console.log('Tasks:', tasks);
  }, [tasks]);

  const handleCreateTask = () => {
    dispatch(createTask(taskInput));
    setTaskInput('');
  };

  const handleEditTask = (id: number, task: string) => {
    dispatch(editTask(id, task));
  };

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleCompleteTask = (id: number) => {
    dispatch(completeTask(id));
  };

  return (
    <div>
      <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
      <button onClick={handleCreateTask}>Crear Tarea</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.task} - {task.completed? 'Completada' : 'Pendiente'}
            <button onClick={() => handleEditTask(task.id, 'Tarea Editada')}>Editar</button>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            <button onClick={() => handleCompleteTask(task.id)}>Completar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;