import React from "react";

class TodoItem extends React.PureComponent {
  render() {
    const {
      todo: { value, id },
    } = this.props;
    return (
      <li className="todoItem">
        <span>{value}</span>
        <button
          className="delete"
          onClick={() => this.props.handleOnDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
