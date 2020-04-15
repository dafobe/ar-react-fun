import { MDCRipple } from '@material/ripple';
import React, { useEffect, useRef } from 'react';
import ButtonView from './buttonView';
import './button.scss';

function Button(props) {
    const buttonElement = useRef(null);
    const {
        onclick, children, className, borderType,
    } = props;

    useEffect(() => {
        const buttonRipple = new MDCRipple(buttonElement.current);
        console.log(buttonRipple);
    }, []);

    return (
        <ButtonView
            ref={buttonElement}
            extraClassName={className}
            onclick={onclick}
            label={children}
            borderType={borderType}
        />
    );
}


export default Button;
