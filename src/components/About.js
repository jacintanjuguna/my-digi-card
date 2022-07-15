import React from 'react';

export default function About(props) {
return(
    <div className="about">
        <h2 className="about--h2">{props.title}</h2>
        <p className="about--p">{props.paragraph}</p>
    </div>
)
}