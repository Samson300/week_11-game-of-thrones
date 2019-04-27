import React from 'react';
import propTypes from 'prop-types';
// expects to receive a "character" prop
// expects the character prop to be an object
// renders the character's name, aliases, birth date, and titles
// optionally, it could render more information about the character
// When you click on a specific character's name in the CharacterList, show the information for that character in the CharacterDetail component.

// Style the list so that it looks like a sidebar (taking up maybe 25% of the width, and sitting on the left-hand side of the page). The CharacterDetail should take up the rest of the horizontal space.

function CharacterDetail(props) {
    return (
        <div>
            <ul className="list-group detail">
                <li className="list-group-item border-0"><strong>Name: </strong>{props.character.name}</li>
                <li className="list-group-item border-0"><strong>Aliases: </strong>{props.character.aliases}</li>
                <li className="list-group-item border-0"><strong>Born: </strong>{props.character.born}</li>
                <li className="list-group-item border-0"><strong>Died: </strong>{props.character.died}</li>
                <li className="list-group-item border-0"><strong>Titles: </strong>{props.character.titles}</li>
            </ul>
        </div>
    )
}

CharacterDetail.propTypes = {
    character: propTypes.object.isRequired
}

export default CharacterDetail;