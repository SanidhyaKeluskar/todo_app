import React from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        tittle: "Milk",
        isCompleted: false
      },
      {
        id: 2,
        tittle: "bread",
        isCompleted: false
      },
      {
        id: 3,
        tittle: "butter",
        isCompleted: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
