import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm';
import { todos } from './todos.json';

class App extends Component { //JSX

    constructor() {
        super();
        //Estado de los datos de este componente
        /*this.state = {
            titulo: 'Aplicacion de Tareas',
            ntareas: 10
        }*/
        this.state = {
            todos
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        //this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    handleAddTodo(todo) {

        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    handleRemoveTodo(index) {

        if (window.confirm('Are you sure you want to delete it?')){
            this.setState({
                todos: this.state.todos.filter((e, i) => {
                    return i !== index
                })
            })
        }
    }

    render() {

        // .map() recorre una a una
        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3> { todo.title } </h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                { todo.priority }
                            </span>
                        </div>
                        <div className="card-body">
                            <p> { todo.description }</p>
                            <p><mark> { todo.responsable } </mark></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={ this.handleRemoveTodo.bind(this, i) }> Remove </button>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="" className="text-white">
                    <span className="badge badge-pill badge-light ml-2">
                        { this.state.todos.length }
                    </span>
                    </a>
                </nav>

                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <TodoForm onAddTodo={ this.handleAddTodo }/>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                { todos }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
