import React from 'react';

export default function Info(props) {
return(
    <div className="info">
        {/* create img prop */}
        <img src={props.img} alt="profile" className="info__img" />
        <div className="info--profile">
        <h1 className="info--h1">{props.name}</h1>
        <h2 className="info--h2">{props.title}</h2>
        <p className="info--email">{props.email}</p>
        </div>
        <div className="info--more">
            <a className="info--li"  href={props.linkedIn}>LinkedIn</a>
            <a className="info--gi" href={props.github}>Github</a>
        </div>
    </div>
)
}