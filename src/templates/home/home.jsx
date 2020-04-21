import React from 'react';
import { Cell, Grid, InnerGrid } from '../../atoms/grid';
import Board from '../../organisms/board';
import Header from '../../organisms/header';
import Marker from '../../organisms/marker';

import App from '../app';

function Home() {
    return (
        <App>
            {/* <Header /> */}

            <Grid>
                <Cell size={8}>
                    <Board />
                </Cell>
                <Cell size={4}>
                    <InnerGrid>
                        <Cell size={12}>
                            <Marker title="Hiro" subtitle="marker" media="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png" />
                        </Cell>
                        <Cell size={12}>
                            <Marker title="QR Hiro" subtitle="qr marker" media="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/qrcode-in-marker.png" />
                        </Cell>
                    </InnerGrid>
                </Cell>
            </Grid>

        </App>
    );
}

export default Home;
