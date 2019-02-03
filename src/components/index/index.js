import React, {Component, Fragment} from 'react';
import './style.css';

class Index extends Component {
    render() {
        return (
            <Fragment>
                <h2>Welcome stranger!</h2>
                <p>This is application for EVE online ESI API. Currently it's in developing mode.
                    Only a part of planed functions already done.</p>
            </Fragment>
        )
    }
}

export default Index