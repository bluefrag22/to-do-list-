import { MdDelete } from "react-icons/md"; 

function TodoItem({ task, index, toggleCompleted, deleteTask }) {
    return (
        <li className={` bg-blue-200 my-2 h-12 flex justify-between items-center p-4 text-base capitalize rounded-lg font-medium 
        hover:scale-95 transition
        ${task.completed ? "line-through text-gray-400" : ""}`}>
            {task.text}
            <div className="flex">
                <input type="checkbox" checked={task.completed} onChange={() => toggleCompleted(index)} className="border-0 scale-150 mr-2.5" />
                <button onClick={() => deleteTask(index)}
                 className="flex justify-center items-center text-white hover:bg-red-600 hover:text-red-400 transition bg-red-400 rounded-l-lg w-8 h-8 "> 
                 <MdDelete className="text-xl" /> </button>
            </div>
            
            
        </li>
    );
}

export default TodoItem