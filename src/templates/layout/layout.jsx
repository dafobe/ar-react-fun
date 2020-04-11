import React from 'react';
import Polaroid from '../../organisms/polariod';
import { Grid, Cell } from '../../atoms/grid';
import Card from '../../atoms/card';

function Layout() {
    return (
        <div>
            <Grid>
                <Cell size={12}>
                    HEADER
                </Cell>
            </Grid>
            <Grid>
                <Cell size={4}>
                    <Polaroid />
                </Cell>
                <Cell size={4}>
                    <Card />
                </Cell>
            </Grid>
        </div>
    );
}

export default Layout;
