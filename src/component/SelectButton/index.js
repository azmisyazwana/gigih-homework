import React from 'react';
import { useState } from 'react';

function SelectButton({id, selectStatus, addSongSelectedToList, unselectSongFromList}) {

    const [isSelected, setSelected] = useState(selectStatus);

    const changeButton = () => {
        setSelected(!isSelected);
        if (!isSelected) {
            addSongSelectedToList(id);
        } else {
            unselectSongFromList(id);
        }
    }

    return (
        <>
            <div>
                <button onClick={changeButton}>{!isSelected ? "Select" : "Deselect"}</button>
            </div>
        </>
    )
}

export default SelectButton;