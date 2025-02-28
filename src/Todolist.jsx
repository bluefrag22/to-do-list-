import TodoItem from "./Todoitem";


function TodoList({ tasks, toggleCompleted, deleteTask }) {
    return (
        <ul className="" >
            {tasks.map((task, index) => (
                <TodoItem key={index} task={task} index={index} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />
            ))}
        </ul>
    );
}

export default TodoList