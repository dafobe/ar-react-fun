import React from 'react';
import './iconButton.scss';

function IconButton(props) {
    const { type } = props;
    return (
        <button type="button" className="mdc-icon-button material-icons">
            {type}
        </button>
    );
}

export default IconButton;
