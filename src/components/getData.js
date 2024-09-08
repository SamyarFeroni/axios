// src/FirstRequest.js
import { useEffect, useState } from "react";
import axios from "axios";
import View from "./view"; 
const apiUrl = "http://localhost:3000/todos"; //localhost api 

const FirstRequest = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");

  // read api
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setTodos(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // add tasks
  const addTodo = async () => {
    try {
      const response = await axios.post(apiUrl, {
        todo: newTodo,
        completed: false,
      });
      setTodos([...todos, response.data]);
      setNewTodo(""); 
      console.log(response.data);
      console.log(todos);
    } catch (error) {
      console.log(error);
    }
  };

  // Update tasks
  const updateTodo = async (id) => {
    try {
      const response = await axios.put(`${apiUrl}/${id}`, {
        ...editTodo,
        todo: editText, 
      });
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
      setEditTodo(null);
      setEditText(""); 
    } catch (error) {
      console.log(error);
    }
  };

  //Delete tasks
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Edit tasks
  const startEdit = (todo) => {
    setEditTodo(todo);
    setEditText(todo.todo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View
      todos={todos}
      newTodo={newTodo}
      setNewTodo={setNewTodo}
      addTodo={addTodo}
      editTodo={editTodo}
      setEditTodo={setEditTodo}
      editText={editText}
      setEditText={setEditText}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
      startEdit={startEdit}
    />
  );
};

export default FirstRequest;
