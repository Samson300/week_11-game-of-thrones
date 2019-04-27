import React from 'react';
import propTypes from 'prop-types';

// expects to receive a "characters" prop
// expects the characters prop to be an array
// renders the name of each of the characters in the array

function CharacterList(props) {
    return (
        <ul className="list">
            {   
                
                Object.values(props.characters.map((char, i) => {
                    if (char.name.toLowerCase().includes(props.search)) {
                        return <li key={i}>
                                    <button onClick={() => { props.handleClick(i) }
                                    }>{char.name}</button>
                                </li>
                    } 
                }))
            }
        </ul>
    )
}

CharacterList.propTypes = {
    characters: propTypes.array.isRequired
}

export default CharacterList;