import React, { Fragment } from "react";
import TodoItem from "./TodoItem";
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map((todo) => {
          return (
            <Fragment key={todo.id}>
              <TodoItem
                handleOnDelete={this.props.handleOnDelete}
                // value={todo.value}
                // id={todo.id}
                todo={todo}
              />
            </Fragment>
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
