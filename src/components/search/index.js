import React, { Component, Fragment } from 'react'
import Response from './response_body'
import API from '../api'


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: undefined,
            data: undefined
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleResponse = (props) => {
        console.log("handleresponse", props.data);
        this.setState(props.data)
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log('---', 'form submited');
        const data = new FormData(event.target);
        data.delete('alanguage'); // remove header
        const queryString = new URLSearchParams(data).toString();
        console.log('---',queryString);
        API.callApi("/v2/search/?", queryString, this.handleResponse)
    }





    render() {

        return (
            <Fragment>
                <div>
                    <form onSubmit={this.handleSubmit} className="form-inline">
                        <label>language: </label>
                        <select name="language" defaultValue="en-us" className="form-control">
                            <option value="de">DE</option>
                            <option value="en-us">en-us</option>
                            <option value="fr">fr</option>
                            <option value="ja">ja</option>
                            <option value="ru">ru</option>
                            <option value="zh">zh</option>
                        </select>


                        <label>Categories: </label>
                        <select name="categories" multiple className="form-control">
                            <option value="agent">agent</option>
                            <option value="alliance">alliance</option>
                            <option value="character">character</option>
                            <option value="constellation">constellation</option>
                            <option value="corporation">corporation</option>
                            <option value="faction">faction</option>
                            <option value="inventory_type">inventory_type</option>
                            <option value="region">region</option>
                            <option value="solar_system">solar_system</option>
                            <option value="station">station</option>
                        </select>

                        <label>Datasource: </label>
                        <select name="datasource" defaultValue="tranquility" className="form-control">
                            <option value="tranquility"> tranquility</option>
                            <option value="singularity">singularity</option>
                        </select>

                        <label>Search string: </label>
                        <input name="search"  className="form-control" />
                        <input type="submit" value="search"  className="form-control" />
                    </form>
                </div>
                <Response response={this.state.response} data={this.state.data} />
            </Fragment>

        )
    }
}

export default Search