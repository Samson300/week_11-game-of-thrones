import React from 'react';
import propTypes from 'prop-types';

// expects to receive a "characters" prop
// expects the characters prop to be an array
// renders the name of each of the characters in the array

function CharacterList(props) {
    const sortedCharacters = props.characters.sort((a, b) => (a.name > b.name) ? 1 : -1)
    return (
        <div className="list-group align-items-center">
            {   
                Object.values(sortedCharacters.map((char, i) => {
                    if (char.name.toLowerCase().includes(props.search)) {
                        return <button className="list-group-item-action" key={i} onClick={() => { props.handleClick(i) }}><strong>{char.name}</strong></button>
                    }
                }))
            }
        </div>
    )
}

CharacterList.propTypes = {
    characters: propTypes.array.isRequired
}

export default CharacterList;