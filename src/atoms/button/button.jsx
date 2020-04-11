import { MDCRipple } from '@material/ripple';
import React, { useEffect, useRef } from 'react';
import './button.scss';

function Button(props) {
    const buttonElement = useRef(null);
    const { onclick, extraClassName, children } = props;

    useEffect(() => {
        const buttonRipple = new MDCRipple(buttonElement.current);
        console.log(buttonRipple);
    }, []);

    return (
        <button type="button" ref={buttonElement} className={`mdc-button mdc-button--outlined ${extraClassName}`} onClick={onclick}>
            <div className="mdc-button__ripple" />
            <span className="mdc-button__label">{children}</span>
        </button>
    );
}


export default Button;
