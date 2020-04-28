import React from 'react';
import Marker from './marker';

function MarkerBarcode(props) {
    const { value, children } = props;

    return <Marker type="barcode" value={value}>{children}</Marker>;
}
export default MarkerBarcode;
