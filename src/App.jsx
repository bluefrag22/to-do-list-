import Todoform from './Todo'
import TodoList from './Todolist';
import { useState,useEffect } from 'react';
import Progressbar from './Progressbar';



function App() {
  const [text, setText] = useState('');
   const [listOfTasks, setListOfTasks] = useState([]);
   const [completed,setCompleted] = useState(30)

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('savetask')) || [];
        setListOfTasks(savedTasks);
    }, []);

    useEffect(() => {
        if (listOfTasks.length > 0) {
            localStorage.setItem('savetask', JSON.stringify(listOfTasks));
        }
    }, [listOfTasks]);

    const addTask = () => {
        if (text.trim() !== '') {
            setListOfTasks([...listOfTasks, { text: text, completed: false }]);
            setText('');
        }
    };

    const completedtask =()=>{
      
    }

    const toggleCompleted = (index) => {
        setListOfTasks(listOfTasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
    };

    const deleteTask = (index) => {
        setListOfTasks(listOfTasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-app p-2">
            <Todoform text={text} setText={setText} addTask={addTask} />
            <TodoList tasks={listOfTasks} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />
            <Progressbar completed={completedtask} task={listOfTasks}/>

            
            
        </div>
    )
}

export default App
