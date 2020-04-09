import React, { useState, useEffect } from 'react';
import 'grid.scss';

function Grid (props) {
    return <div class="mdc-layout-grid">
                <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell">A</div>
                <div class="mdc-layout-grid__cell">B</div>
                <div class="mdc-layout-grid__cell">C</div>
                </div>
            </div>
}

export default Grid;