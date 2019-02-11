import React from 'react'
import { En } from '../Constants/En'

const Detail = ({age, city, gender, image_thumb, name, username}) => {
    return (
        <div className="custom-card">
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
                        <span className="gender">
                        {En['COMMA']} { gender }
                        </span>
                    </div>
                    <div>
                        <span className="username">
                            { username }
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

export { Detail }