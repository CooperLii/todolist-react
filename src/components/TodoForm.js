import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.onSubmit}>
          <input
            onChange={this.props.onChange}
            value={this.props.value}
          ></input>
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
