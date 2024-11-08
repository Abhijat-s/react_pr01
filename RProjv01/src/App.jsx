import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // >>> Static variables
  // let todos = ["Go To Gym", "Do your homework", "Keep wife happy"];

  // >>> Stateful Variables that we need to interact with
  // >>> todos is the main todo list
  const [todos, setTodos] = useState([]);

  // >>> todoValue is the new todo that is the input
  const [todoValue, setTodoValue] = useState("");

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistTodos(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index;
    });
    persistTodos(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBoEdited = todos[index];
    setTodoValue(valueToBoEdited);
    handleDeleteTodo(index);
  }

  function persistTodos(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  useEffect(() => {
    // >>> if local storage doesnt exist then break
    if (!localStorage) {
      return;
    }

    // >>> if local storage exists, then get back the todos
    let localTodos = localStorage.getItem("todos");

    // >>> If the local storage returns a value and is not undefined/null then set it up
    if (localTodos) {
      localTodos = JSON.parse(localTodos).todos;
      setTodos(localTodos);
    }
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />

      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
