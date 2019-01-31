import React, { Component } from 'react'
import API from '../api'

class Subelement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: undefined,
            data: undefined,
            loading: true
        }
    };

    handleResponse = (props) => {
        console.log("handleresponse3", props.data);
        this.setState(props.data)
        this.setState({ loading: false})
    }

    componentDidMount() {
        const queryString = new URLSearchParams("datasource=tranquility").toString();
        const object_id = this.props.id
        this.setState({object_id: object_id})

        console.log(object_id )
        const path = `/v3/alliances/${object_id}/?`
        console.log("path", path)
        API.callApi(path, queryString, this.handleResponse)
    }

    render() {
        if(this.state.loading) {
            return "Loading..."
        }

        return(
            <section>
                <div className="card">
                    corporation_id: {this.state.object_id}<br/>
                    creator_corporation_id: {this.state.data.creator_corporation_id}<br/>
                    creator_id: {this.state.data.creator_id}<br/>
                    date_founded: {this.state.data.date_founded}<br/>
                    executor_corporation_id: {this.state.data.executor_corporation_id}<br/>
                    faction_id: {this.state.data.faction_id}<br/>
                    name: {this.state.data.name}<br/>
                    ticker: {this.state.data.ticker}<br/>
                </div>
            </section>
        )
    }
}


export default Subelement