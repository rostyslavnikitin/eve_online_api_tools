import React, { Component } from 'react'

class TextLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return(
            <li>{this.props.line}</li>
        )
    }
}

export default TextLine