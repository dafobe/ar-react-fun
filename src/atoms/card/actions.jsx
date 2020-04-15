import React from 'react';

const addClassName = (className) => (component) => React.cloneElement(component, { className: `${component.className || ''} ${className}` });
const addActionButtonClass = addClassName('mdc-card__action--button');
const addActionIconClass = addClassName('mdc-card__action--icon');

export function ActionButtons(props) {
    const { children } = props;
    const buttons = React.Children.toArray(children);
    const actionButtons = buttons.map((button) => addActionButtonClass(button));
    return (
        <div className="mdc-card__action-buttons">
            { actionButtons }
        </div>
    );
}

export function ActionIcons(props) {
    const { children } = props;
    const buttonIcons = React.Children.toArray(children);
    const actionButtonIcons = buttonIcons.map((icon) => addActionIconClass(icon));
    return (
        <div className="mdc-card__action-icons">
            { actionButtonIcons }
        </div>
    );
}

export default function Actions(props) {
    const { children } = props;

    return (
        <div className="mdc-card__actions">
            {children}
        </div>
    );
}
