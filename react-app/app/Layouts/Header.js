import React, { Component } from 'react'
import { En } from '../Constants/En'
import { Routes } from '../Constants/Routes'

const Header = ({push}) => {

    class HeaderComponent extends Component {
        constructor(props) {
            super(props)
            this.goToHome = this.goToHome.bind(this)
        }

        goToHome() {
            push(Routes.userList)
        }

        render() {
            return (
                <header className="container-fluid" onClick={this.goToHome}>
                    <div className="row">
                        <div className="col">
                            <h3>
                                <span className="header-title">
                                    <span className="icon">
                                        <i className="fa fa-heart fa-fw"></i> 
                                    </span>
                                    <span className="title">
                                        { En['DATING'] } { En['PORTAL'] }
                                    </span>
                                </span>
                            </h3>
                        </div>
                    </div>
                </header>
            )
        }
    } 
    
    return <HeaderComponent />
}

export { Header }