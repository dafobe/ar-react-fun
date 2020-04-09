import React, { useState } from 'react';
import './polaroid.scss';
import Button from '../button';
import ExpandableButton from '../expandableButton';

const getCounterIncrementerHandler = (counter, count = 0) => () => counter(count + 1);

function Polaroid() {
    const [count, setCount] = useState(0);
    const onIncrementHandler = getCounterIncrementerHandler(setCount, count);
    const onResetHandler = () => setCount(0);


    return (
        <div className="polaroid">
            <p>
                 Has pulsado {count} veces
            </p>
            <p>
                <Button onclick={onIncrementHandler}>Click me!</Button>
            </p>
            <p>
                <Button onclick={onResetHandler}>Reset me!</Button>
            </p>
            <div>
                <ExpandableButton>Filtrar</ExpandableButton>
            </div>
        </div>
    );
}

export default Polaroid;
