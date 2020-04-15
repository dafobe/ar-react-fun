import React from 'react';
import './iconButton.scss';

const defaultOnClick = (type) => () => console.log(`Clicked IconButton ${type}`);

function IconButton(props) {
    const { type, className, onclick = defaultOnClick(type) } = props;
    return (
        <button type="button" className={`mdc-icon-button material-icons ${className}`} onClick={onclick}>
            {type}
        </button>
    );
}

export default IconButton;
