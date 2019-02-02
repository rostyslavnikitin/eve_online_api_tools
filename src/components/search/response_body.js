import React, { Component } from 'react'
import Element from './element'

class Response extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let body;


        if (this.props.response !== null && this.props.data !== null)  {
            console.log(this.props.response);


                const props = this.props.data;
                body = <div className="card">
                        <div className="header">
                            Response
                        </div>
                        <label>is ok: </label>{this.props.response.ok.toString() }<br/>
                        <label>status: </label> {this.props.response.status}<br/>
                        <label>statusText: </label> {this.props.response.statusText}<br/>
                        <div>
                            <h2>Elements</h2> { Object.keys(this.props.data).map(
                                function(elem, i) {
                                    return <Element key={i} name={elem} subelements={Object.values(props[elem])}/>
                                }
                                )

                            }
                        </div>
                    </div>;

        }

        else
        {
            body = <div>nothing to display, make API call first</div>;
        }

        return (

            <div>{body}</div>

        )
    }

}

export default Response