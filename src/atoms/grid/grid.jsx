import React from 'react';
import './grid.scss';

export function InnerGrid(props) {
    const { children } = props;
    return (
        <div className="mdc-layout-grid__inner">
            {children}
        </div>
    );
}

function Grid(props) {
    const { children, fixedColum, align } = props;
    return (
        <div className={`mdc-layout-grid
             ${fixedColum ? 'mdc-layout-grid--fixed-column-width' : ''}
             ${align ? `mdc-layout-grid--align-${align}` : ''}`}
        >
            <InnerGrid>
                {children}
            </InnerGrid>
        </div>
    );
}

export default Grid;
