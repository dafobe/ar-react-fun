import React from 'react';

function SceneView(props) {
    const { children, debug = false } = props;

    return (
        <a-scene
            // stats
            embedded
            // vr-mode-ui="enabled: true;"
            arjs={`debug: ${debug};
            debugUIEnabled: ${debug};
            trackingMethod: best;
            sourceType: webcam;
            detectionMode: mono_and_matrix;
            matrixCodeType: 3x3;
            `}
        >
            {children}
        </a-scene>
    );
}

export default SceneView;
