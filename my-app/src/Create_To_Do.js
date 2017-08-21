import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CreateToDo extends Component {
    render() {
        return (
            <div>
                <Link to={'/'}>
                <span>Back to Tasks</span>
                </Link>
                <span>Tasks</span>
                <input />
                <button>Complete</button>
                <input />
                <button>Save</button>
                <button>Cancel</button>
                <button>Delete</button>
            </div>
        )
    }
}
export default CreateToDo;