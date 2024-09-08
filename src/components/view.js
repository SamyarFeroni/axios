import React from "react";

const View = ({
  todos,
  newTodo,
  setNewTodo,
  addTodo,
  editTodo,
  setEditTodo,
  editText,
  setEditText,
  updateTodo,
  deleteTodo,
  startEdit,
}) => {
  return (
    <div className="todo-container">
      <h2 className="text-center">Todo List</h2>

      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {editTodo && (
        <div className="edit-todo">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Edit task"
          />
          <button onClick={() => updateTodo(editTodo.id)}>Update</button>
          <button onClick={() => setEditTodo(null)}>Cancel</button>
        </div>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <p>
              <strong>Task:</strong> {todo.todo}
            </p>
            <p>
              <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
            </p>
            <button onClick={() => startEdit(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default View;
