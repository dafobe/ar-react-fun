import React from 'react';
import Card from '../../atoms/card';
import IconButton from '../../atoms/iconButton';
import Button from '../../atoms/button';

const icons = [<IconButton key="share" type="share" />, <IconButton key="more-options" type="more_vert" />];
const buttons = [<Button key="load">Load</Button>];

function Marker(props) {
    const { title = 'Title', subtitle = 'Subtitle', media } = props;

    return <Card title={title} subtitle={subtitle} icons={icons} buttons={buttons} media={media} />;
}

export default Marker;
