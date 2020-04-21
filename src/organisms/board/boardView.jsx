import React from 'react';
import Button from '../../atoms/button';
import './board.scss';

const loading = <div> LOADING ... </div>;


function BoardView(props) {
    const {
        isLoading, count, onIncrementHandler, onResetHandler,
    } = props;

    const boardElement = (
        <a-scene embedded arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: true;">
            <a-marker preset="hiro">
                <a-entity
                    position="0 -1 0"
                    scale="0.05 0.05 0.05"
                    gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                />
            </a-marker>
            <a-entity camera />
        </a-scene>
        // <div className="rfs-board">
        //     <section className="rfs-board__header">
        //         Has pulsado {count} veces
        //         <p>
        //             <Button onclick={onIncrementHandler} borderType="outlined">Click me!</Button>
        //         </p>
        //         <p>
        //             <Button onclick={onResetHandler}>Reset me!</Button>
        //         </p>
        //     </section>
        //     <section className="rfs-board__canvas">
        //         <a-scene embedded arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        //             <a-entity camera />
        //             <a-marker preset="hiro">
        //                 <a-entity
        //                     position="0 -1 0"
        //                     scale="0.05 0.05 0.05"
        //                     gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
        //                 />
        //             </a-marker>
        //         </a-scene>
        //     </section>
        // </div>
    );

    return isLoading ? boardElement : loading;
}

export default BoardView;
