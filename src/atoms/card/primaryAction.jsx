import React from 'react';

function PrimaryAction(props) {
    const { children } = props;

    return (
        <div className="mdc-card__primary-action">
            {children}
        </div>
    );
}

export default PrimaryAction;
