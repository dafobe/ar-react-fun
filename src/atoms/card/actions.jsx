import React from 'react';

function Actions(props) {
    const { children, title } = props;

    return (
        <div className="mdc-card__actions">
            {children}
            {/* <button className="mdc-button mdc-card__action mdc-card__action--button">
                <div className="mdc-button__ripple" />
                <span className="mdc-button__label">Action 1</span>
            </button>
            <button className="mdc-button mdc-card__action mdc-card__action--button">
                <div className="mdc-button__ripple" />
                <span className="mdc-button__label">Action 2</span>
            </button> */}
        </div>
    );
}

export default Actions;
