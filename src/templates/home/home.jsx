import React from 'react';
import Card from '../../atoms/card';
import { Cell, Grid } from '../../atoms/grid';
import IconButton from '../../atoms/iconButton';
import Button from '../../atoms/button';
import Polaroid from '../../organisms/polariod';
import Header from '../../organisms/header';
import App from '../app';

function Home() {
    const icons = [<IconButton key="share" type="share" />, <IconButton key="more-options" type="more_vert" />];
    const buttons = [<Button key="load" />];
    return (
        <App>
            <Header />

            <Grid>
                <Cell size={4}>
                    <Polaroid />
                </Cell>
                <Cell size={4}>
                    <Card title="Marker" subtitle="hiro" icons={icons} buttons={buttons} media="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png" />
                </Cell>
            </Grid>

        </App>
    );
}

export default Home;
