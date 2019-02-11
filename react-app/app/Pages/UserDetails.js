import React, { Component, Fragment } from 'react'
import { RouteId } from '../Utilities/RouteDetails'
import { Routes } from '../Constants/Routes'
import { UserDetailsAction } from '../Actions/UserAction'
import { connect } from 'react-redux'

class UserDetails extends Component {
    constructor(props) {
        super(props)
    }

    /**
     * Before the component mounts
     */
    componentWillMount() {
        if (RouteId({...this.props})) {
            this.props.UserDetailsAction(RouteId({ ...this.props}))
        }
    }

    /**
     * After the components mounts
     */
    componentDidMount() {   
        this._isMounted = true
    }

    /**
     * Before the component unmounts
     */
    componentWillUnmount() {
        this._isMounted = false
    }

    /**
     * Watches the changes in props and state
     * @param {object} prevProps 
     * @param {object} prevState 
     */
    componentDidUpdate(prevProps, prevState) {
        
    }

    render() {
        console.log(this.props.user)
        return(
            <Fragment>
                User Details
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = { UserDetailsAction }

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)