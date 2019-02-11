import React, { Component, Fragment } from 'react'
import { En } from '../Constants/En'

class Filter extends Component {
    constructor(props) {
        super(props)
        this.onChangeForm = this.onChangeForm.bind(this)
        this.state = {
            genderState: 'female'
        }
    }

    onChangeForm(event) {
        event.preventDefault()
        if (this.props.onChangeForm) {
            this.props.onChangeForm(event)
        }
        this.setState({
            genderState: event.target.value
        })
    }

    componentDidUpdate(prevProps, prevStates) {
        if (this.state.genderState !== prevStates.genderState) {
            this.setState({
                genderState: this.state.genderState
            })
        }
    }

    render() {
        const { genderState } = this.state
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <form className="form">
                                <label htmlFor="gender-select">
                                    { En['GENDER'] } 
                                </label>
                               <select
                                    name="gender" 
                                    className="form-control" 
                                    id="gender-select"
                                    value={genderState} 
                                    onChange={this.onChangeForm}>
                                    <option value="male">
                                        {En['MALE']}
                                    </option>
                                    <option value="female">
                                        {En['FEMALE']}
                                    </option>
                                    <option value="all">
                                        {En['ALL']}
                                    </option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export { Filter }