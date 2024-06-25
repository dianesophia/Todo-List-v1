import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

const TodoItem = ({ task, index, setEdit, deleteTask }) => {
  return (
    <li className='flex items-center justify-between bg-white p-4 rounded shadow-md mb-3'>
      <span className='text-lg'>{task.task}</span>
      <div className='flex items-center gap-2'>
        <button onClick={() => setEdit(index)} className='bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded p-2 hover:from-blue-500 hover:to-blue-400'><FaRegEdit /></button>
        <button onClick={() => deleteTask(task.id)} className='bg-gradient-to-r from-orange-400 to-orange-500 rounded p-2 hover:from-orange-500 hover:to-orange-400 text-black'><MdOutlineDeleteOutline /></button>
      </div>
    </li>
  );
};

export default TodoItem;
