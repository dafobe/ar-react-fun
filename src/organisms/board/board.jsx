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
    const [arScriptUrl, setArScriptUrl] = useState('');
    const [arJsLoaded, setArJsLoaded] = useState(false);
    const onIncrementHandler = getCounterIncrementerHandler(setCount, count);
    const onResetHandler = () => setCount(0);


    useEffect(() => {
        if( !arJsLoaded ){
            const aframe = import(
                /* webpackChunkName: "aframe" */
                /* webpackMode: "lazy" */
                'aframe').then(() => {
                    console.log('aframe loaded');
                    setArScriptUrl('https://raw.githack.com/AR-js-org/AR.js/3.0.0/aframe/build/aframe-ar.js');
                });
            }
        }, []);

    useScript(arScriptUrl, () => setArJsLoaded(true));


    // useEffect(() => {
    //     // const aframe = loadLibrary('https://aframe.io/releases/1.0.0/aframe.js');
    //     const arjs = loadLibrary('https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js', () => setArJsLoaded(true));

    //     return () => {
    //         document.querySelector('head').removeChild(aframe);
    //         document.querySelector('head').removeChild(arjs);
    //     };
    // }, []);

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
