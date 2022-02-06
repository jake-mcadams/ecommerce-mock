import React from "react";
import userImage from '../images/image-avatar.png'
import '../styles/shared/Avatar.css';

const Avatar=()=>{
    return (
        <div className="avatar__container">
            <img src={userImage} alt="" className="avatar__image" />
        </div>
    )
}

export default Avatar;