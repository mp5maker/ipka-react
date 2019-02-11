import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { En } from '../Constants/En'
import { Header } from '../Layouts/Header'
import { Filter } from '../Layouts/Filter'
import { Card } from '../Layouts/Card'
import { map, filter } from 'lodash'
import { UserListAction } from '../Actions/UserAction'
import { Loading } from '../Layouts/Loading'

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gender: 'female'
        }
        this.onChangeForm = this.onChangeForm.bind(this)
    }

    onChangeForm(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
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

    render() {
        const { history, users} = this.props
        const { payload, loading, error } = users
        const { gender } = this.state
        const filteredPayload = filter(payload, (person) => {
            if (gender == 'all') {
                return person
            }
            if (person.gender == gender) {
                return person
            }
        })
        return(
            <Fragment>
                <Header />
                <Filter onChangeForm={this.onChangeForm}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="user-list">
                                {
                                    (loading) ?
                                    <Fragment>
                                        <Loading />
                                    </Fragment>
                                    : <Fragment></Fragment>
                                }
                                {
                                    !isEmpty(error) ?
                                    <Fragment>
                                        { En['ERROR'] }
                                    </Fragment>
                                    : <Fragment></Fragment>
                                }
                                {
                                    (payload) ? 
                                    map(filteredPayload, (person, index) => {
                                        return <Card {...person} {...history} key={index}/>
                                    })
                                    : <Fragment></Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </div>
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