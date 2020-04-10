import React, { useState, useEffect, useRef } from 'react';
import { MDCRipple } from '@material/ripple';
import './button.scss';

function Button(props) {
    const buttonElement = useRef(null);
    const [disabled, setDisabled] = useState(false);
    const { onclick, children } = props;

    useEffect(() => {
        const buttonRipple = new MDCRipple(buttonElement.current);
        console.log(buttonRipple);
    }, []);

    return (
        <button type="button"  ref={buttonElement} className="mdc-button mdc-button--outlined" disabled={disabled} onClick={onclick}>
            <div className="mdc-button__ripple" />
            <span className="mdc-button__label">{children}</span>
        </button>
    );
}


export default Button;
