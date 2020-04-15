import React from 'react';
import './iconButton.scss';

function IconButton(props) {
    const { type, className } = props;
    return (
        <button type="button" className={`mdc-icon-button material-icons ${className}`}>
            {type}
        </button>
    );
}

export default IconButton;
