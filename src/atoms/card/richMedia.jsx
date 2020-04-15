import React from 'react';

function RichMedia(props) {
    const { children, title, media = 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg' } = props;

    return (
        <div
            className="rfs-card__media mdc-card__media mdc-card__media--16-9"
            style={{ backgroundImage: `url(${media})` }}
        >
            {title && <div className="mdc-card__media-content">title</div>}
            {children}
        </div>
    );
}

export default RichMedia;
