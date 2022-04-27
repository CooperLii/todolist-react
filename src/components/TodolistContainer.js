import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

class TodolistContainer extends React.Component {
  state = {
    inputValue: "",
    todoList: [{ value: "hello", id: "1" }],
    itemId: "1",
  };

  handleOnChange = (e) => {
    this.setState((prevState) => {
      const newState = { ...prevState, inputValue: e.target.value };
      return newState;
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const randomId = uuidv4();
    const newTodo = { value: this.state.inputValue, id: randomId };
    this.setState((prevState) => {
      const newState = {
        ...prevState,
        todoList: [newTodo, ...prevState.todoList],
        inputValue: "",
        itemId: newTodo.id,
      };
      return newState;
    });
  };

  handleOnDelete = (itemId) => {
    const newTodoList = this.state.todoList.filter(
      (todo) => itemId !== todo.id
    );
    console.log("newTodoList", newTodoList);

    this.setState((prevState) => {
      const newState = { ...prevState, todoList: newTodoList };
      return newState;
    });
  };

  componentDidUpdate() {
    console.log("from update", this.state.todoList);
  }
  render() {
    return (
      <div className="TodolistContainer">
        <h1>Todo List</h1>
        <TodoForm
          onSubmit={this.handleOnSubmit}
          value={this.state.inputValue}
          onChange={this.handleOnChange}
        ></TodoForm>
        <TodoList
          todoList={this.state.todoList}
          handleOnDelete={this.handleOnDelete}
        ></TodoList>
      </div>
    );
  }
}

export default TodolistContainer;
