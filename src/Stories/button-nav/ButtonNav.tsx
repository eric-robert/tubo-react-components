import React, { CSSProperties, useState } from 'react';
import { ColorPallet, defaultPallet } from '../../Utilities/ColorPallet';
import { MouseTracker } from '../../Utilities/MouseTracker';
import './ButtonNav.css';

interface ButtonProps {
    
    active?: boolean;
    text: string;
    pallet?: ColorPallet;
    onClick?: () => void;
    props ?: any;

}

export const NavButton = ( _ : ButtonProps ) => {

    let { active, pallet, text, onClick, props } = _;

    if (!pallet) pallet = defaultPallet

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    let style = { ... props}
    let indicatorStyle = {} as any

    if (active) {
        style.color = pallet.accentText;
        indicatorStyle.background = pallet.primary;
    } 

    else {
        style.color = pallet.text
        indicatorStyle.background = hover ? pallet.grey : undefined
    } 

    return <div className="button-nav" style={style}>
        <div className="button-nav-indicator" style={indicatorStyle} />
        <MouseTracker 
            changeHover={setHover} 
            changeClick={setClick} 
            onClick={onClick}>
            
            { text }

        </MouseTracker>
    </div>
            
};
