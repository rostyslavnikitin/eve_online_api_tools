import React, { Component } from 'react'
import Subelement from './subelement'

class Element extends Component {

    render() {

        const sub_elements = Object.values(this.props.subelements).map(function(id, key) {
                return <Subelement key={key} id={id}/>
            }
        )
        return (
            <section>
                <div key={this.props.key}>{this.props.name}</div>
                {sub_elements}
            </section>
        )
    }
}

export default Element