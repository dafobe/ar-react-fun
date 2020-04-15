import React from 'react';
import PrimaryAction from './primaryAction';
import RichMedia from './richMedia';
import { Headline6, Subtitle2 } from '../typography';
import Actions, { ActionButtons, ActionIcons } from './actions';
import './card.scss';

const createActions = (buttons, icons) => {
    if (buttons || icons) {
        return (
            <Actions>
                {buttons && <ActionButtons>{buttons}</ActionButtons>}
                {icons && <ActionIcons>{icons}</ActionIcons>}
            </Actions>
        );
    }

    return null;
};

function Card(props) {
    const {
        title, subtitle, media, buttons, icons, description,
    } = props;

    return (
        <div className="mdc-card">
            <PrimaryAction>
                {media && <RichMedia media={media} />}
                {title && <Headline6><h2 className="rfs-card__primary-action__title">{title}</h2></Headline6>}
                {subtitle && <Subtitle2><h3 className="rfs-card__primary-action__subtitle">{subtitle}</h3></Subtitle2>}
                {description && <div className="rfs-card__primary-action__description">{description}</div>}
            </PrimaryAction>
            {createActions(buttons, icons)}
        </div>
    );
}

export default Card;
