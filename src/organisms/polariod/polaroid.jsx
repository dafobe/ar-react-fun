import React, { useState } from 'react';
import Button from '../../atoms/button';
import './polaroid.scss';

const getCounterIncrementerHandler = (counter, count = 0) => () => counter(count + 1);

function Polaroid() {
    const [count, setCount] = useState(0);
    const onIncrementHandler = getCounterIncrementerHandler(setCount, count);
    const onResetHandler = () => setCount(0);


    return (
        <div className="polaroid">
            Has pulsado {count} veces
            <p>
                <Button onclick={onIncrementHandler}>Click me!</Button>
            </p>
            <p>
                <Button onclick={onResetHandler}>Reset me!</Button>
            </p>
        </div>
    );
}

export default Polaroid;
