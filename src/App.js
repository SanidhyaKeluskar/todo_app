import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Milk",
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: "bread",
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: "butter",
        isCompleted: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  addTodo = title => {
    const newTitle = {
      id: uuid.v4(),
      title,
      isCompleted: false
    };
    this.setState({ todos: [...this.state.todos, newTitle] });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
