import React, { Component } from 'react'
import Subelement from './subelement'

class Element extends Component {
    render() {
        const props = this.props
        const sub_elements = Object.values(this.props.subelements).map(function(id, key) {
                return <Subelement key={key} id={id} section={props.name} />
            })

        return (
            <section>
                <h3 key={this.props.key}>{this.props.name}'s</h3>
                {sub_elements}
            </section>
        )
    }
}

export default Element