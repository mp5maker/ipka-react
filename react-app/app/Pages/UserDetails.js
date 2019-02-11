import React, { Component, Fragment } from 'react'
import { RouteId } from '../Utilities/RouteDetails'
import { UserDetailsAction } from '../Actions/UserAction'
import { Header} from '../Layouts/Header'
import { Loading } from '../Layouts/Loading'
import { En } from '../Constants/En'
import { connect } from 'react-redux'
import { isEmpty, map } from 'lodash'
import { Detail } from '../Layouts/Detail'

class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    goBack() {
        this.props.history.goBack()
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
        const { user, history } = this.props
        const { payload, loading, error } = user
        return(
            <Fragment>
                <Header {...history} />
                <div className="containuer-fluid">
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
                                    map([payload], (person, index) => {
                                        return <Detail {...person} key={index}/>
                                    })
                                    : <Fragment></Fragment>
                                }
                            </div>
                            <div className="back-button text-center">
                                <button
                                    onClick={this.goBack} 
                                    type="button" 
                                    className="btn btn-primary" 
                                    role="Goes Back">
                                    <span className="icon">
                                        <i className="fa fa chevron-left"></i>
                                    </span>
                                    <span className="text">
                                        { En['GO_BACK'] }
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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