import React, {Component, Fragment} from 'react'
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
                body = <Fragment>
                            <div className="card bg-dark text-light">
                                <div className="card-header">
                                    Response
                                </div>
                                <div className="card-body">
                                    is ok: {this.props.response.ok.toString() }<br/>
                                    status: {this.props.response.status}<br/>
                                    statusText: {this.props.response.statusText}<br/>
                                </div>
                            </div>
                            <div>
                                <h2>Elements</h2> { Object.keys(this.props.data).map(
                                    function(elem, i) {
                                        return <Element key={i} name={elem} subelements={Object.values(props[elem])}/>
                                    }
                                    )

                                }
                            </div>
                        </Fragment>
                    ;

        }

        else
        {
            body = <div>nothing to display, make API call first</div>;
        }

        return (

            <Fragment>
                {body}
            </Fragment>

        )
    }

}

export default Response