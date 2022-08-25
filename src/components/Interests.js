import React from 'react';

export default function Interests(props) {
    return ( 
      <div className="interests">
        <h2 className="interests--h2"> { props.title } </h2> 
        <p className = "interests--p"> { props.paragraph }</p> 
        </div>
    )
}