import React, {Component} from 'react';

class AddForm extends Component {
    state ={
        content :""
    }

    handleChange = (e)=>{
        this.setState(
            {
                content: e.target.value
            })
    };

    handleSubmit = (e)=>{
        e.preventDefault()

        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    };

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Add new Todo:</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.content}/>
                        </div>
                    </div>
                </form>
        );
    }
}

export default AddForm;