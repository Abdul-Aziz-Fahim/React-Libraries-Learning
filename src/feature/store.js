import { nanoid } from "nanoid";
import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => {
      return {
        todos: [...state.todos, { id: nanoid(), text, completed: false }],
      };
    }),
  removeTodo: (id) =>
    set((state) => {
      return { todos: state.todos.filter((todo) => todo.id !== id) };
    }),
  toggleComplete: (id) =>
    set((state) => {
      const updatedTodos = state.todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });

      return { todos: updatedTodos };
    }),
}));

export default useTodoStore;
