import React from 'react';
import Card from '../../atoms/card';
import { Cell, Grid } from '../../atoms/grid';
import Polaroid from '../../organisms/polariod';
import Header from '../../organisms/header';
import Marker from '../../organisms/marker';

import App from '../app';

function Home() {
    return (
        <App>
            <Header />

            <Grid>
                <Cell size={8}>
                    <Polaroid />
                </Cell>
                <Cell size={4}>
                    <Marker />
                </Cell>
            </Grid>

        </App>
    );
}

export default Home;
