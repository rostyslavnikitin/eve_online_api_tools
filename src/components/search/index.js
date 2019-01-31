import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleSubmit(event) {
        event.preventDefault();
        console.log('---', 'form submited');
        const data = new FormData(event.target);
        data.delete('alanguage'); // remove header
        const queryString = new URLSearchParams(data).toString();
        console.log('---',queryString);
        this.callApi(queryString)
    }


    callApi(queryString) {
        const base_path = "/v2/search/?";
        fetch('https://esi.evetech.net' + base_path + queryString)
            .then( response => console.log('response: ', response))
    }


    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <label>Accept-language: </label>
               <select name="alanguage" defaultValue="en-us">
                   <option value="de">DE</option>
                   <option value="en-us">en-us</option>
                   <option value="fr">fr</option>
                   <option value="ja">ja</option>
                   <option value="ru">ru</option>
                   <option value="zh">zh</option>
               </select>

               <label>language: </label>
               <select name="language" defaultValue="en-us">
                   <option value="de">DE</option>
                   <option value="en-us">en-us</option>
                   <option value="fr">fr</option>
                   <option value="ja">ja</option>
                   <option value="ru">ru</option>
                   <option value="zh">zh</option>
               </select>


               <label>Categories: </label>
               <select name="categories" multiple>
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
               <select name="datasource" defaultValue="tranquility">
                   <option value="tranquility"> tranquility</option>
                   <option value="singularity">singularity</option>
               </select>

               <label>Search string: </label>
               <input name="search" />

               <label>Strict: </label>
               <input type="checkbox" name="strict" />
               
               
               <input type="submit" value="search" />
           </form>



        )
    }
}

export default Search