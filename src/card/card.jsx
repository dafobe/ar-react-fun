import {useState} from 'react';
import './card.scss'

function Card (props) {
    return <div class="mdc-card demo-card">
    <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
      <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"></div>
      <div class="demo-card__primary">
        <h2 class="demo-card__title mdc-typography mdc-typography--headline6">Our Changing Planet</h2>
        <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">by Kurt Wagner</h3>
      </div>
      <div class="demo-card__secondary mdc-typography mdc-typography--body2">Visit ten places on our planet that are undergoing the biggest changes today.</div>
    </div>
    <div class="mdc-card__actions">
      <div class="mdc-card__action-buttons">
        <button class="mdc-button mdc-card__action mdc-card__action--button">  <span class="mdc-button__ripple"></span> Read</button>
        <button class="mdc-button mdc-card__action mdc-card__action--button">  <span class="mdc-button__ripple"></span> Bookmark</button>
      </div>
      <div class="mdc-card__action-icons">
        <button class="mdc-icon-button mdc-card__action mdc-card__action--icon--unbounded" aria-pressed="false" aria-label="Add to favorites" title="Add to favorites">
          <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
          <i class="material-icons mdc-icon-button__icon">favorite_border</i>
        </button>
        <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="Share" data-mdc-ripple-is-unbounded="true">share</button>
        <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="More options" data-mdc-ripple-is-unbounded="true">more_vert</button>
      </div>
    </div>
  </div>
}

export default Card;