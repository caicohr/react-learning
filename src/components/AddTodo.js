import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
    constructor() {
        super()
        this.state = {clicked: false}
        this.myRef = React.createRef()
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <div>
                <input ref = {this.myRef} />
                <button onClick = {() => this.handleClick()}>
                    Add
                </button>
            </div>
        )
    }
    handleClick() {
        const node = this.myRef
        this.props.onAddClick(node)
        
    }
}