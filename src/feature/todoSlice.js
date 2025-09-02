import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const idToTemove = action.payload.id;
      state.todos = state.todos.filter((todo) => todo.id !== idToTemove);
    },
    toggleComplete: (state, action) => {
      const data = state.todos.find((todo) => todo.id === action.payload.id);
      data.completed = !data.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
