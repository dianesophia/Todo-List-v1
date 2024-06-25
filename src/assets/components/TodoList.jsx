import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, setEdit, deleteTask }) => {
  return (
    <div className="bg-gray-50 p-7 rounded shadow-md w-full max-w-lg lg:w-1/4">
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={task.id} index={index} task={task} setEdit={setEdit} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
