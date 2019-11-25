import React,{Component} from 'react';
import Todos from "./Components/Todos";
import AddForm from "./Components/AddForm";
import './App.css';

class App extends Component{
  state = {
    todos:[
      {id:1, content: 'buy some milk'},
      {id:2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id)=>{
      const todos = this.state.todos.filter(todo =>{
          return todo.id !== id
      });
      this.setState({
          todos
      })
  };

  addTodo = (todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
        todos: todos
    })
  };

  render() {
    return (
        <div className="App">
          <header><h1>Best Todo App Ever</h1></header>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <AddForm addTodo={this.addTodo}/>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row todos-container">
                <div className="col-md-3"></div>
                <div className="col-md-6 big-container">
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
  }
}

export default App;
