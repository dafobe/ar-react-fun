import React from 'react';
import { Cell, Grid, InnerGrid } from '../../atoms/grid';
import Board from '../../organisms/board';
import { MarkerBarcode } from '../../atoms/marker';
import Scene from '../../atoms/scene';
import './home.scss';

import App from '../app';

function Home() {
    return (
        <App>
            <div className="rfs-home">

                <Scene debug="true">
                    {/* <MarkerBarcode value={0}>
                        <a-box
                            color="#FABADA"
                            position="0 0 2"
                            scale="1 1 1"
                        />
                        <a-box
                            color="green"
                            position="0 0 0"
                            scale="2 2 2"
                        />
                        <a-entity
                            position="0 0 0"
                            scale="5 5 5"
                            rotation="0 90 0"
                            gltf-model="/3d/rose/th_05_11.gltf"
                        />
                    </MarkerBarcode> */}
                    {/* <MarkerBarcode value={1}>
                    <a-entity
                        position="0 0 0"
                        scale="1 1 5"
                        gltf-model="/3d/rose2/model.gltf"
                    />
                </MarkerBarcode>
                <MarkerBarcode value={2}>
                    <a-entity
                        position="0 0 0"
                        scale="0.5 0.5 0.5"
                        gltf-model="/3d/carnivorPlant/VenusFlyTrap.gltf"
                    />
                </MarkerBarcode> */}


                    <a-marker preset="hiro">
                        <a-box
                            color="#4CC3D9"
                            position="0 0 0"
                            scale="1 1 1"
                        />
                    </a-marker>
                    <MarkerBarcode value={0}>
                        <a-box
                            position="0 0 0.5"
                            rotation="0 0 0"
                            material="color: red; transparent: true; opacity: 0.50;"
                        />
                    </MarkerBarcode>
                    <a-camera position="0 0 0" />
                    <MarkerBarcode value={1}>
                        <a-box
                            color="goldenrod"
                            position="0 0 0.5"
                            scale="1 1 1"
                        />
                    </MarkerBarcode>
                    <MarkerBarcode value={2}>
                        <a-box
                            color="red"
                            position="0 0 0.5"
                            scale="1 1 1"
                        />
                    </MarkerBarcode>
                    <MarkerBarcode value={3}>
                        <a-entity
                            position="0 0 0.5"
                            scale="5 5 5"
                            rotation="0 90 0"
                            gltf-model="/3d/rose/th_05_11.gltf"
                        />
                    </MarkerBarcode>
                    <MarkerBarcode value={4}>
                        <a-entity
                            position="0 0 0.5"
                            color="blue"
                            scale="5 5 5"
                            rotation="0 90 0"
                            gltf-model="/3d/rose/th_05_11.gltf"

                        />
                    </MarkerBarcode>
                    {/* <MarkerBarcode value={0}>
                    <a-box position="0 0 0" material="opacity: 0.5; side: double;color:#fabada;">
                        <a-torus-knot
                            radius="0.26"
                            radius-tubular="0.05"
                            animation="property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"
                        />
                    </a-box>
                </MarkerBarcode> */}
                    {/* <MarkerBarcode value={1}>
                    <a-box
                        color="blue"
                        position="0 0.5 0"
                        rotation="0 45 45"
                        scale="1 1 1"
                        animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"
                    />
                </MarkerBarcode> */}
                </Scene>
            </div>

            {/* <Grid>
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
            </Grid> */}
        </App>
    );
}

export default Home;
