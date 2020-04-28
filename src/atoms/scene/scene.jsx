import React, { useState } from 'react';
import 'aframe';
import useScript from '../../hooks/useScript';
import SceneView from './sceneView';

const loading = <div> LOADING ... </div>;


function Scene(props) {
    const { children, debug } = props;
    const [arJsLoaded, setArJsLoaded] = useState(false);

    useScript('https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js', () => setArJsLoaded(true));

    return arJsLoaded
        ? (
            <SceneView debug={debug}>
                {children}
            </SceneView>
        ) : loading;
}

export default Scene;
