import React,  { useState } from "react";
import Model from "../../components/Model/Model";
import Todo from '../../components/Todo/ToDo';
import TodoList from "../../components/Todo/ToDoList/ToDoList";

const TodoForm = () => {
  const [ todos, setTodos ] = useState([]);
  return (
    <Model>
    <div>
      <h3>ToDos</h3>
    <Todo saveTodo={todoText => {
        const trimmedText = todoText.trim();
        if (trimmedText.length > 0) {
          setTodos([...todos, trimmedText]);
        }
    }}/>
      <TodoList todos={todos}
        deleteTodo={todoIndex => {
        const newTodos = todos
          .filter((_, index) => index !== todoIndex);
        setTodos(newTodos);
        }}
      />
      </div>
    </Model>
  )
};

export default TodoForm;
