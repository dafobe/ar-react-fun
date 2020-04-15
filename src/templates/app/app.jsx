import React from 'react';
import Typography from '../../atoms/typography';

function App(props) {
    const { children } = props;
    return (
        <Typography>
            <div className="app">
                { children }
            </div>
        </Typography>
    );
}

export default App;
