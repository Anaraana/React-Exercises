import React from "react";
import ToDo from "./child";
const todos = [
  "make appointment",
  "go to library",
  "groceries",
  "pay car insurance",
  "make dinner",
  "make money",
];

const ToDoList = () => {
  return (
    <div>
      {todos.map((todo, Idx) => {
        return <ToDo childTodo={todo} daraalal= {Idx+1} key={Idx} />;
      })}
    </div>
  );
};

export default ToDoList;
