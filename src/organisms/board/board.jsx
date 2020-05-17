import React, { useState, useEffect } from 'react';
import BoardView from './boardView';
import useScript from '../../hooks/useScript';
import 'aframe';

const getCounterIncrementerHandler = (counter, count = 0) => () => counter(count + 1);

const loadLibrary = (url, onLoad) => {
    const script = document.createElement('script');

    script.src = url;
    script.async = false;
    script.onload = onLoad;
    document.querySelector('head').appendChild(script);

    return script;
};

function Board() {
    const [count, setCount] = useState(0);
    const [arJsLoaded, setArJsLoaded] = useState(false);
    const onIncrementHandler = getCounterIncrementerHandler(setCount, count);
    const onResetHandler = () => setCount(0);

    useScript('https://raw.githack.com/AR-js-org/AR.js/3.0.0/aframe/build/aframe-ar.js', () => setArJsLoaded(true));

    return (
        <BoardView
            isLoading={arJsLoaded}
            count={count}
            onIncrementHandler={onIncrementHandler}
            onResetHandler={onResetHandler}
        />
    );
}

export default Board;
