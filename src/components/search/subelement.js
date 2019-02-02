import React, {Component, Fragment} from 'react'
import API from '../api'
import Corporation from '../templates/corporation'
import Station from '../templates/station'
import Alliance from '../templates/alliance'


class Subelement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: null,
            data: null,
            loading: true,
            body: `not have template for ${this.props.section}`
        }

    };

    handleResponse = (props) => {
        console.log("handleresponse3", props.data);
        this.setState(props.data)
        this.setState({ loading: false})
        if (this.props.section === "corporation") {
            this.setState({body: <Corporation object_id={this.state.object_id} data={this.state.data}/>})
        }
        if (this.props.section === "station") {
            this.setState({body: <Station object_id={this.state.object_id} data={this.state.data}/>})
        }

        if (this.props.section === "alliance") {
            this.setState({body: <Alliance object_id={this.state.object_id} data={this.state.data}/>})
        }

    }

    componentDidMount() {
        const queryString = new URLSearchParams("datasource=tranquility").toString();
        const object_id = this.props.id
        this.setState({object_id: object_id})

        console.log(object_id )

        const voc = {
            agent: `/latest/characters/${object_id}/?`,
            alliance: `/v3/alliances/${object_id}/?`,
            character: `/latest/characters/${object_id}/?`,
            constellation: `/v1/universe/constellations/${object_id}/?`,
            corporation: `/v4/corporations/${object_id}/?`,
           // faction:  ,
            inventory_type: `/v3/universe/types/${object_id}/?`,
            region: `/v1/universe/regions/${object_id}/?`,
            solar_system: `/v4/universe/systems/${object_id}/?`,
            station: `/v2/universe/stations/${object_id}/?`,
        }

        const path = voc[this.props.section]
        console.log("path", path)
        API.callApi(path, queryString, this.handleResponse)





    }

    render() {
        if (this.state.data === null) {
            return "Loading..."
        }
        else {
            return (
                <Fragment>
                    {this.state.body}
                </Fragment>

            )
        }
    }
}


export default Subelement