import React from 'react';
import './typography.scss';

const typographyCreator = (type) => (component) => React.cloneElement(component, { className: `${component.props.className || ''} ${type}` });
const addHeadline = (level) => typographyCreator(`mdc-typography--headline${level}`);
const addSubtitle = (level) => typographyCreator(`mdc-typography--subtitle${level}`);
const addBody = (level) => typographyCreator(`mdc-typography--body${level}`);


const addTypography = typographyCreator('mdc-typography');

const createStyle = (level, creator) => (props) => {
    const { children } = props;

    return React.Children.map(children, (child) => creator(`${level}`)(child));
};

export const headline1 = createStyle('1', addHeadline);
export const headline2 = createStyle('2', addHeadline);
export const headline3 = createStyle('3', addHeadline);
export const headline4 = createStyle('4', addHeadline);
export const headline5 = createStyle('5', addHeadline);
export const headline6 = createStyle('6', addHeadline);
export const subtitle1 = createStyle('1', addSubtitle);
export const subtitle2 = createStyle('2', addSubtitle);
export const body1 = createStyle('1', addBody);
export const body2 = createStyle('2', addBody);

function Typography(props) {
    const { children } = props;

    return React.Children.map(children, (child) => addTypography(child));
}

export default Typography;
