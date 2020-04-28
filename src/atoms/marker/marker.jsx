import React, { useEffect, useRef } from 'react';

function Marker(props) {
    const { children, value, type } = props;
    const markerContainer = useRef(null);

    useEffect(() => {
        const marker = markerContainer.current;

        marker.addEventListener('markerFound', () => {
            console.log('markerFound', type, value, marker.id);
        });

        marker.addEventListener('markerLost', () => {
            console.log('markerLost', type, value, marker.object3D);
        });
    }, []);

    return (
        <a-marker
            type={type}
            value={value}
            ref={markerContainer}
            position="0 0 0"
            rotation="0 0 0"
            // arjs-anchor="changeMatrixMode: modelViewMatrix; markerhelpers: false"
            // arjs-hit-testing="enabled: true; renderDebug: true"
            // cursor="rayOrigin: mouse"
        >
            {children}
        </a-marker>
    );
}

export default Marker;
