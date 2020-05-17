import React from 'react';
import './scene.scss';

function SceneView(props) {
    const { children, debug = false, barcodeMarkers = true } = props;

    return (
        <a-scene
            class="rfs-scene"
            // stats
            embedded
            arjs={`debug: ${debug};
            debugUIEnabled: ${debug};
            ${barcodeMarkers ? 'detectionMode: mono_and_matrix; matrixCodeType: 3x3' : ''}
            `}
        >
            {children}
        </a-scene>
    );
}

export default SceneView;
