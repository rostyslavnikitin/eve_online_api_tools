import React, { Component } from 'react'
import TextLine from './textline'

class Station extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let card_style = {width: "35rem"}
        console.log(this.props)

        const positions = Object.values(this.props.data.position).map(function(elem, i) {
            return <TextLine line={elem} />
        })
        const services = Object.values(this.props.data.services).map(function(elem, i) {
            return <TextLine line={elem} />
        })

        return(
            <div className="card bg-dark text-white mx-1 mt-2 mb-2" style={card_style}>
                <div className="card-header" style={{minHeight: "5em"}}>
                    <h5>{this.props.data.name}</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        max_dockable_ship_volume: {this.props.data.max_dockable_ship_volume}
                    </div>
                    <div className="row">
                        office_rental_cost: {this.props.data.office_rental_cost}
                    </div>
                    <div className="row">
                        owner: <a>{this.props.data.owner}</a>
                    </div>
                    <h4>Positions:</h4>
                    <ul>{positions}</ul>


                    <h4>Services:</h4>
                    <ul>{services}</ul>

                    <div className="row">
                        race_id: {this.props.data.race_id}
                    </div>
                    <div className="row">
                        reprocessing_efficiency: {this.props.data.reprocessing_efficiency}
                    </div>
                    <div className="row">
                        reprocessing_stations_take: {this.props.data.reprocessing_stations_take}
                    </div>

                    <div className="row">
                        station_id: {this.props.data.station_id}
                    </div>

                    <div className="row">
                        system_id: {this.props.data.system_id}
                    </div>

                    <div className="row">
                        type_id: {this.props.data.type_id}
                    </div>
                </div>
            </div>
        )
    }
}

export default Station