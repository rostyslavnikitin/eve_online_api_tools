import React, { Component } from 'react'

class API extends Component{
    constructor(props) {
        super(props)
    }

    callApi( path, queryString, callback) {
        fetch('https://esi.evetech.net' + path + queryString)
            .then( response  => {
                    response.json().then( data =>
                        callback({data: {data: data, response: response}})
                    )
                }
            )
    }
}

const APIService =  new API
export default APIService