import React from 'react';

function RichMedia(props) {
    const { children, title } = props;

    return (
        <div className="my-card__media mdc-card__media mdc-card__media--16-9">
            {title && <div className="mdc-card__media-content">title</div>}
            {children}
        </div>
    );
}

export default RichMedia;
