import './App.css';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useEffect, useState } from 'react';
import { onSnapshot, collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import TodoList from './assets/components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, task: doc.data().task })));
    });
    return () => unsubscribe();
  }, []);

  const setEdit = (index) => {
    setEditIndex(index);
    setInput(tasks[index].task);
  };

  const updateTask = async () => {
    try {
      if (input.trim() !== '') {
        const todoDocRef = doc(db, 'tasks', tasks[editIndex].id);
        await updateDoc(todoDocRef, { task: input });
        setInput('');
        setEditIndex(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async () => {
    try {
      if (input.trim() !== '') {
        await addDoc(collection(db, 'tasks'), { task: input });
        setInput('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, 'tasks', id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='min-h-screen flex flex-col gap-4 items-center justify-center p-5 bg-wooden-bg bg-cover bg-center'>
      <div className='bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4'>
        <h1 className='text-3xl font-bold text-center mb-5'>
          Todo List
        </h1>
        <div className="flex">
          <input
            type="text"
            placeholder='Add a new task'
            className='py-4 px-4 border rounded w-full mr-2 h-10'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={editIndex === -1 ? addTask : updateTask} className='bg-gradient-to-r from-yellow-100 to-yellow-500 text-black py-2 px-4 rounded font-semibold h-10'>
            {editIndex === -1 ? <IoIosAdd /> : <FaRegEdit />}
          </button>
        </div>
      </div>
      {tasks.length > 0 && <TodoList tasks={tasks} setEdit={setEdit} deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
