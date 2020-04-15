import React, { forwardRef } from 'react';

function ButtonView(props, ref) {
    const { extraClassName, label = 'Button', onclick, borderType } = props;
    const borderTypeClass = borderType === 'outlined' ? 'mdc-button--outlined' : '';
    return (
        <button
            type="button"
            ref={ref}
            className={`rofosch-button mdc-button ${borderTypeClass} ${extraClassName || ''}`}
            onClick={onclick}
        >
            <div className="mdc-button__ripple" />
            <span className="mdc-button__label">{label}</span>
        </button>
    );
}


export default forwardRef(ButtonView);
