import React from 'react';

function Todos({todos, deleteTodo}) {
    const todoList = todos.length ? (
        todos.map(todo=>{
            return(
                <div className="input-group mb-3" key={todo.id}>
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                          <input type="checkbox" onClick={()=> deleteTodo(todo.id)}/>
                      </div>
                    </div>
                    <div className="form-control">
                        <span className="todo-content">{todo.content}</span>
                    </div>
                </div>
            )
        })
    ) : (<div className="form-control">
        <p>You have no
            todo's left, yay</p>
        </div>);
    return (
        <div className="todos">
            {todoList}
        </div>
    );
}

export default Todos;