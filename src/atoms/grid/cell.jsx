import React from 'react';

const getColumnSpans = (size, device) => {
    if (!size) {
        return '';
    } if (device) {
        return `mdc-layout-grid__cell--span-${size}-${device}`;
    }
    return `mdc-layout-grid__cell--span-${size}`;
};
function Cell(props) {
    const {
        size, device, order, align, children,
    } = props;
    return (
        <div className={`
        mdc-layout-grid__cell
        ${getColumnSpans(size, device)}
        ${order ? `mdc-layout-grid__cell--order-${order}` : ''}
        ${align ? `mdc-layout-grid__cell--align-${align}` : ''}
        `}
        >
            {children}
        </div>
    );
}

export default Cell;
