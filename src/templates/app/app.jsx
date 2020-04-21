import React from 'react';
import Typography from '../../atoms/typography';
import './app.scss';

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
