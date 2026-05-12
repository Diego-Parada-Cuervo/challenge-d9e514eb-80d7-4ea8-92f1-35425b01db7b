import React from 'react';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <TaskList />
    </div>
  );
};

export default App;