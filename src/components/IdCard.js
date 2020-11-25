import React from 'react';
import './IdCard.css'

class IdCard extends React.Component {
    render () {
        return (
        <div className="idCard">
            <div className = "idCard-img">
                <img src= {this.props.picture} alt="profile"/>
            </div>
            <div className = "idCard-details">
                <p><strong>First Name:</strong> {this.props.firstName}</p>
                <p><strong>Last Name:</strong> {this.props.lastName}</p>
                <p><strong>Gender:</strong> {this.props.gender}</p>
                <p><strong>Height:</strong> {this.props.height}</p>
                <p><strong>Birth:</strong> {this.props.birth}</p>
            </div>
        </div>
        )
    }
}

export default IdCard;