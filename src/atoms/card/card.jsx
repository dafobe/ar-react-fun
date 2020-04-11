import React from 'react';
import './card.scss';


function Card(props) {
    const { children } = props;
    return (
        <div className="mdc-card">
            {children}
            {/* <div className="mdc-card__primary-action">
                <div className="mdc-card__media" style={{ 'background-image': 'url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;)' }} />
                <div className="demo-card__primary">
                    <h2 className="demo-card__title mdc-typography mdc-typography--headline6">Our Changing Planet</h2>
                    <h3 className="demo-card__subtitle mdc-typography mdc-typography--subtitle2">by Kurt Wagner</h3>
                </div>
                <div className="demo-card__secondary mdc-typography mdc-typography--body2">Visit ten places on our planet that are undergoing the biggest changes today.</div>
            </div>
            <div className="mdc-card__actions">
                <div className="mdc-card__action-buttons">
                    <button type="button" className="mdc-button mdc-card__action mdc-card__action--button">  <span className="mdc-button__ripple" /> Read</button>
                    <button type="button" className="mdc-button mdc-card__action mdc-card__action--button">  <span className="mdc-button__ripple" /> Bookmark</button>
                </div>
                <div className="mdc-card__action-icons">
                    <button type="button" className="mdc-icon-button mdc-card__action mdc-card__action--icon--unbounded" aria-pressed="false" aria-label="Add to favorites" title="Add to favorites">
                        <i className="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
                        <i className="material-icons mdc-icon-button__icon">favorite_border</i>
                    </button>
                    <IconButton type="share" />
                    <IconButton type="more_vert" />
                </div>
            </div> */}
        </div>
    );
}

export default Card;
