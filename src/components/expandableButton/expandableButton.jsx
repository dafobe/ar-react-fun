import React, { useState, useEffect } from 'react';
import './expandableButton.scss';

const toggleExpanded = (expanded, setExpanded) => {
    console.log('toggle expanded', !expanded);
    setExpanded(!expanded);
}

function ExpandableButton (props) {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        // setExpanded(!expanded);
    });
    const expandedClass = `expandable ${expanded ? 'expandable--open':''}`;

    return <button type="button" className={expandedClass} onClick={() => toggleExpanded(expanded, setExpanded)}>
        {props.children}
    </button>
}

export default ExpandableButton;