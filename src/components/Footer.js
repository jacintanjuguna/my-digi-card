import React from 'react';

export default function Footer(props) {
    return (
        <footer>
           <a href="https://twitter.com/JacintaNjuguna7" className="footer--github">
            <img src={props.twitter} alt="" />
              </a>
              <a href="https://www.instagram.com/" className="footer--instagram">
            <img src={props.instagram} alt="" />
                </a>
                <a href="https://github.com/jacintanjuguna" className="footer--github">
            <img src={props.github} alt="" />
                </a> 

        </footer>
    );
}