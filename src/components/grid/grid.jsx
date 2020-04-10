import React from 'react';
import './grid.scss';

function Grid(props) {
    const { children, fixedColum, align } = props;
    return (
        <div className={`mdc-layout-grid
             ${fixedColum ? 'mdc-layout-grid--fixed-column-width' : ''}
             ${align ? `mdc-layout-grid--align-${align}` : ''}`}
        >
            <div className="mdc-layout-grid__inner">
                {children}
            </div>
        </div>
    );
}

export default Grid;
