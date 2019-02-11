import React from 'react'
import { En } from '../Constants/En'

const Header = () => {
    return (
        <header className="container-fluid">
            <div className="row">
                <h3 className="header-title col">
                    <span className="icon">
                        <i className="fa fa-heart fa-fw"></i> 
                    </span>
                    <span className="title">
                        { En['DATING'] } { En['PORTAL'] }
                    </span>
                </h3>
            </div>
        </header>
    )
}

export { Header }