

function Progressbar({completed, task}){
    const completetask = task.filter(task => task.completed).length
    const totaltask = task.length
    const totaloftaskdone = totaltask > 0? (completetask /totaltask)*100:0;

    return(
        <div className="bg-gray-300 rounded-full h-4 hover:h-8 hover:rounded-lg transition-all">
            <div className="bg-blue-500 h-4 rounded-full duration-300 hover:h-8 hover:rounded-lg transition-all" style={{width:`${totaloftaskdone}%`}}></div>
        </div>
    )
}
export default Progressbar