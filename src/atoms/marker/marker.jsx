import React, { useEffect, useRef } from 'react';

function Marker(props) {
    const { children, value, type, preset} = props;
    const markerContainer = useRef(null);

    useEffect(() => {
        const marker = markerContainer.current;

        marker.addEventListener('markerFound', () => {
            console.log('markerFound', type, value, preset, marker.id);
        });

        marker.addEventListener('markerLost', () => {
            console.log('markerLost', type, value, preset, marker.id);
        });
    }, []);

    return (
        <a-marker
            type={type}
            value={value}
            ref={markerContainer}
            preset={preset}
            position="0 0 0"
            rotation="0 0 0"
        >
            {children}
        </a-marker>
    );
}

export default Marker;
