import { useState, useEffect } from "react"

function Todoform({ text, setText, addTask }){
    return (
        <div className="flex justify-center ">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your task" className="shadow-md w-64 h-12 p-4 rounded-lg border-2 border-blue-200" />
            <button onClick={addTask} className="rounded-lg bg-blue-200 w-20 h-12 mx-4 shadow-md">Add task</button>
        </div>
    );
}

export default Todoform