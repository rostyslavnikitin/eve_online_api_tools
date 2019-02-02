import React, { Component, Fragment } from 'react'
import Response from './response_body'
import API from '../api'

const options_language = [
    { value: 'en-us', label: 'English' },
    { value: 'de', label: 'Deutsch' },
    { value: 'fr', label: 'French' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ru', label: 'Russian' },
    { value: 'zh', label: 'Chinese' },
];

const options_categories = [
    { value: 'agent', label: 'agent' },
    { value: 'alliance', label: 'alliance' },
    { value: 'character', label: 'character' },
    { value: 'constellation', label: 'constellation' },
    { value: 'corporation', label: 'corporation' },
    { value: 'faction', label: 'faction' },
    { value: 'inventory_type', label: 'inventory_type' },
    { value: 'region', label: 'region' },
    { value: 'solar_system', label: 'solar_system' },
    { value: 'station', label: 'station' }
];


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: null,
            data: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleResponse = (props) => {
        console.log("handleresponse", props.data);
        this.setState(props.data)
    }


    handleSubmit(event) {
        this.setState({ response: null, data: null});  // reset response data
        event.preventDefault();
        const data = new FormData(event.target);
        const queryString = new URLSearchParams(data).toString();
        API.callApi("/v2/search/?", queryString, this.handleResponse)
    }



    render() {
        return (
            <Fragment>
                <div>
                    <form onSubmit={this.handleSubmit} className="">
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label htmlFor="search">Search string: </label>
                                <input id="search" name="search"  className="form-control" defaultValue="jita" />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="language">language</label>
                                <select name="language" defaultValue="en-us" className="form-control">
                                    <option value="de">DE</option>
                                    <option value="en-us">en-us</option>
                                    <option value="fr">fr</option>
                                    <option value="ja">ja</option>
                                    <option value="ru">ru</option>
                                    <option value="zh">zh</option>
                                </select>
                            </div>

                            <div className="form-group col-md-2">
                                <label htmlFor="categories">Categories</label>
                                <select name="categories" className="form-control" multiple defaultValue={["station"]}>
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
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="datasource">Datasource</label>
                                <select id="datasource" name="datasource" defaultValue="tranquility" className="form-control">
                                    <option value="tranquility">tranquility</option>
                                    <option value="singularity">singularity</option>
                                </select>
                            </div>
                            <input type="submit" value="search"  className="form-control" />
                        </div>
                    </form>
                </div>
                <br/>

                <Response response={this.state.response} data={this.state.data} />
            </Fragment>

        )
    }
}

export default Search