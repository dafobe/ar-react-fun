import React from 'react';
import Marker from './marker';

function MarkerPreset(props) {
    const { preset = 'hiro', children } = props;

    return <Marker preset={preset}>{children}</Marker>;
}
export default MarkerPreset;
