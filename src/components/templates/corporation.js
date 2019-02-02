import React, { Component } from 'react'

class Corporation extends Component {
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
                    alliance_id: {this.props.alliance_id}<br/>
                    ceo_id: {this.props.data.ceo_id}<br/>
                    creator_id: {this.props.data.creator_id}<br/>
                    date_founded: {this.props.data.date_founded}<br/>
                    description: <p>{this.props.data.description}</p>
                    faction_id: {this.props.data.faction_id}<br/>
                    home_station_id: {this.props.data.home_station_id}<br/>
                    member_count: {this.props.data.member_count}<br/>
                    shares: {this.props.data.shares}<br/>
                    tax_rate: {this.props.data.tax_rate}<br/>
                    ticker: {this.props.data.ticker}<br/>
                    url: {this.props.data.url}<br/>
                    war_eligible: {this.props.data.war_eligible}
                <br/>
                </div>
            </div>
        )
    }
}

export default  Corporation