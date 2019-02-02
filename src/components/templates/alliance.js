import React, { Component } from 'react'

class Alliance extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let card_style = {width: "15rem", display: "inline-block"}

        return (
            <div className="card">
                <div className="card-header" style={card_style}>
                    {this.props.data.name} #{this.props.object_id}
                </div>
                <div className="card-body">
                    creator_corporation_id: {this.props.data.creator_corporation_id}<br/>
                    creator_id: {this.props.data.creator_id}<br/>
                    date_founded: {this.props.data.date_founded}<br/>
                    executor_corporation_id: {this.props.data.executor_corporation_id}<br/>
                    faction_id: {this.props.data.faction_id}<br/>
                    ticker: {this.props.data.ticker}<br/>
                </div>
            </div>
        )
    }
}

export default  Alliance