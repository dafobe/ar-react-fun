import React from 'react';
import { Cell, Grid, InnerGrid } from '../../atoms/grid';
import Board from '../../organisms/board';
import { MarkerBarcode, MarkerHiro } from '../../atoms/marker';
import Scene from '../../atoms/scene';
import './home.scss';

import App from '../app';

function Home() {
    return (
        <Scene debug="false" barcodeMarkers="true">
            {/* <MarkerBarcode value={0}>
                <a-box
                    color="#FABADA"
                    position="0 0 0"
                    scale="1 1 1"
                />
                <a-entity
                    position="0 0 0"
                    scale="5 5 5"
                    rotation="0 90 0"
                    gltf-model="/3d/rose/th_05_11.gltf"
                />
            </MarkerBarcode>
            <MarkerBarcode value={1}>
                <a-entity
                    position="0 -0.5 0"
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


            <a-marker-camera position="0 0 0" rotation="0 0 0">
                <MarkerHiro>
                    <a-box
                        color="#4CC3D9"
                        position="0 0 0"
                    />
                </MarkerHiro>
                <MarkerBarcode value={0}>
                    {/* <a-entity
                        position="0 0 0"
                        scale="0.5 0.5 0.5"
                        gltf-model="/3d/carnivorPlant/VenusFlyTrap.gltf"
                    /> */}
                    <a-box
                        position="0 0 0"
                        rotation="0 0 0"
                        material="color: red; transparent: true; opacity: 0.50;"
                    />
                </MarkerBarcode>
                <MarkerBarcode value={1}>
                    <a-box
                        color="goldenrod"
                        position="0 0 0"
                        scale="1 1 1"
                    />
                </MarkerBarcode>
                <MarkerBarcode value={2}>
                    <a-box
                        color="red"
                        position="0 0 0"
                        scale="1 1 1"
                    />
                </MarkerBarcode>
                <MarkerBarcode value={3}>
                    <a-box
                        color="blue"
                        position="0 0 0"
                        scale="1 1 1"
                    />
                </MarkerBarcode>
                <MarkerBarcode value={4}>
                    <a-box
                        color="green"
                        position="0 0 0"
                        scale="1 1 1"
                    />
                </MarkerBarcode>
            </a-marker-camera>


        </Scene>
    );
}

export default Home;
