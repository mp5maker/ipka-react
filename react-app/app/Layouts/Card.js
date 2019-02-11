import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { En } from '../Constants/En'
import { RouteDetails } from '../Constants/Routes'

const Card = ({id, age, city, gender, image_thumb, name, username, push}) => {
    
    class CardComponent extends Component {
        constructor(props) {
            super(props)
        }
    
        goToUserDetails({event, id}) {
            push(RouteDetails({id: id, route: 'userDetails'}))
        }
    
        render() {
            return(
                <div className="custom-card" onClick={(event) => this.goToUserDetails({event: event, id: id})}>
                    <div className="custom-card-content">
                        <div className="image-container">
                            <img
                                className="image-thumb"
                                src={image_thumb} 
                                alt={`${username} picture`}/>
                        </div>
                        <div className="person-details">
                            <div>
                                <span className="name">
                                    <strong>
                                        { name }
                                    </strong>
                                </span>
                                <span className="age">
                                    {En['COMMA']} {age}
                                </span>
                            </div>
                            <div>
                                <span className="username">
                                    { username }
                                </span>
                                <span className="link-details">
                                    <Link to={RouteDetails({id: id, route: 'userDetails'})}>
                                        { En['CHECK'] } { En['PROFILE'] }
                                    </Link>
                                </span>
                            </div>
                            <div>
                                <span className="city">
                                    { city }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return <CardComponent />
}

export { Card }