import React, { Component } from 'react';

class TodoForm extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            responsable: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
        //console.log(e.target.value, e.target.name);
    }

    handleSubmit(e) {
        //Evita refrescar la pagina
        e.preventDefault();

        this.props.onAddTodo(this.state);
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsable" onChange={this.handleInput} className="form-control" placeholder="Responsable"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" onChange={this.handleInput} className="form-control" placeholder="Description"/>
                    </div>
                    <div className="form-group">
                        <select name="priority" onChange={this.handleInput} className="form-control">
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={this.handleSubmit} class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TodoForm;
