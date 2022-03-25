import React from 'react';


const Header = (props) => {

    return (
        <div className="myMovieHeading">
            <h1 className="title">{props.title}</h1>
        </div>
    )
}

export default Header;