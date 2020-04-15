import React from 'react';
import Card from '../../atoms/card';
import IconButton from '../../atoms/iconButton';
import Button from '../../atoms/button';

const icons = [<IconButton key="share" type="share" />, <IconButton key="more-options" type="more_vert" />];
const buttons = [<Button key="load">Load</Button>];

function Marker(props) {
    return <Card title="Hiro" subtitle="marker" icons={icons} buttons={buttons} media="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png" />;
}

export default Marker;
