import { useState } from "react";
import { nanoid } from "nanoid";

const TodoApp = () => {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div
      className="relative flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <main className="mx-auto w-full max-w-lg p-4">
        <div className="mt-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            To-Do List
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            A clean and minimalist interface for managing your tasks.
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <input
            className="form-input flex-1 rounded-xl border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            placeholder="Enter new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="flex items-center justify-center rounded-xl bg-green-400 px-6 py-3 text-white font-bold shadow-lg transition-all hover:bg-opacity-90"
            onClick={() => {
              setTodos([
                ...todos,
                { id: nanoid(), completed: false, text: newTask },
              ]),
                setNewTask("");
            }}
          >
            Add Task
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                className="h-5 w-5 rounded-md border-gray-300 text-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700"
              />
              <p
                className={`flex-1 text-gray-900 dark:text-white ${
                  todo.completed
                    ? "line-through text-gray-400 dark:text-gray-500"
                    : ""
                }`}
              >
                {todo.text}
              </p>
              <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                <span className="material-symbols-outlined text-xl">
                  delete
                </span>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TodoApp;
