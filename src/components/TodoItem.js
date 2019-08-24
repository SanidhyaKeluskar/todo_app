import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.tittle}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
