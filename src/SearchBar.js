import React from 'react';

function SearchBar(props) {
    return (
        <div className="text-center searchbar">
            <input type="text" placeholder="     Search by name" onChange={(e) => { props.handleChange(e.target.value) }}></input>
        </div>
    )
}


export default SearchBar;