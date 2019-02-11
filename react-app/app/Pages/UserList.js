import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { UserListAction } from '../Actions/UserAction'

class UserList extends Component {
    constructor(props) {
        super(props)
    }

    /**
     * Call the Api before the component mounts
     */
    componentWillMount() {
        this.props.UserListAction()
    }

    /**
     * Set Mounted to true [Helpful for memory leaks]
     */
    componentDidMount() {
        this._isMounted = true
    }

    /**
     * Set Mounted to false [Helpful for memory leaks]
     */
    componentWillUnmount() {
        this._isMounted = false
    }

    /**
     * Watches the prop or state changes
     * @param {object} prevProps 
     * @param {object} prevState 
     */
    componentWillUpdate(prevProps, prevState) {
        
    }

    render() {
        console.log(this.props.users)
        return(
            <Fragment>
                User List
            </Fragment>
        )
    }
}

/**
 * Attach State to Props
 * @param {object} state 
 */
const mapStateToProps = (state) => {
    return {
        users: state.user
    }
}

const mapDispatchToProps = { UserListAction }

export default connect(mapStateToProps, mapDispatchToProps)(UserList)