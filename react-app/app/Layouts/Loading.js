import React, { Component } from 'react'
import { En } from '../Constants/En'

/**
 * Shows loading the page is requesting the first asynchronous request
 */
class Loading extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="loading">
                <div className="company">
                    { En['PLEASE_WAIT'] +  " . . . "}
                </div>
                <div className="spinner"></div>
            </div>
        )
    }
}

export { Loading }