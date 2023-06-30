"use client"
import { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addTasks = () => {
    if (task !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const deleteTasks = (index) => {
    const updatedList = [...tasks];
    updatedList.splice(index, 1);
    setTasks(updatedList);
  };

  const toggleComplete = (index) => {
    const updatedList = [...tasks];
    updatedList[index].completed = !updatedList[index].completed;
    setTasks(updatedList);
  };

  const filteredTodos = tasks.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl m-16 font-bold">Simple Todo App</h1>
      <div className="p-6 flex flex-row">
        <input
          className="flex-grow bg-slate-100 rounded-md p-4 m-4"
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="Create a new todo"
        />
        <input
          type="text"
          className="w-full border rounded py-2 px-4 mb-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:shadow-md"
          placeholder="Search Todo"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          onClick={addTasks}
          className="bg-green-500 text-white p-3 m-3 rounded-md font-bold hover:bg-green-600"
        >
          Add Tasks
        </button>
      </div>
      <div>
        {filteredTodos?.length > 0 ? (
          <ul>
            {filteredTodos.map((task, index) => (
              <div className="flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md" key={index}>
                <li className={`self-center font-semibold pr-10 mr-6 ${task.completed ? "text-gray-500 line-through" : ""}`}>{task.text}</li>
                <button
                  onClick={() => {
                    deleteTasks(index);
                  }}
                  className="bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-600"
                >
                  Delete
                </button>
                  <button
                    onClick={() => {
                      toggleComplete(index);
                    }}
                  className={`bg-green-500 text-white p-2 mx-1 rounded-md font-bold  ${task.completed ? "bg-blue-600  pointer-events-none" : " hover:bg-green-700"}` } style={{ cursor: task.completed ? "not-allowed" : "pointer", opacity: task.completed ? 0.5 : 1 }}
                  >
                    Complete
                  </button>
              </div>
            ))}
          </ul>
        ) : (
          <div>
            <p className="self-center font-semibold pr-10 mr-6 grow">No Task Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
