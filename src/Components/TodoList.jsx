import React, { useState } from "react";
import "./todo.css";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [Todos, setTodo] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newtodo, setNewTodo] = useState("");

  let addTodo = () => {
    setTodo((prevTodo) => {
      return [...prevTodo, { task: newtodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoVallue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodo((prevTodo) => Todos.filter((prevTodo) => prevTodo.id != id));
  };

  return (
    <>
      <div className="container">
        <div className="Contain">
          <div className="card">
            {" "}
            <h2 className="h2"> Create A task</h2>
            <br />
            <input
              className="input1"
              type="text"
              placeholder="Add a Task"
              value={newtodo}
              onChange={updateTodoVallue}
            />
            <button className="button" onClick={addTodo}>
              Add Task
            </button>
            <hr />
            <ul>
              {Todos.map((todo) => {
                {
                  return (
                    <li className="li" key={todo.id}>
                      <span>{todo.task}</span>
                      <button
                        className="del"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        Delete
                      </button>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
