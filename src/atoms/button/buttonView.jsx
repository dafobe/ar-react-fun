import React, { forwardRef } from 'react';

const defaultOnClick = (label) => () => console.log(`Clicked Button ${label}`);

function ButtonView(props, ref) {
    const {
        extraClassName, label = 'Button', onclick = defaultOnClick(label), borderType,
    } = props;
    const borderTypeClass = borderType === 'outlined' ? 'mdc-button--outlined' : '';
    return (
        <button
            type="button"
            ref={ref}
            className={`rfs-button mdc-button ${borderTypeClass} ${extraClassName || ''}`}
            onClick={onclick}
        >
            <div className="mdc-button__ripple" />
            <span className="mdc-button__label">{label}</span>
        </button>
    );
}


export default forwardRef(ButtonView);
