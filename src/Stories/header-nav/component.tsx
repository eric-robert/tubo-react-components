import React, { CSSProperties, useState } from 'react';
import { getCurrentPallet } from '../../Utilities/ColorPallet';
import { MouseTracker } from '../../Utilities/MouseTracker';
import { GetChildren } from '../../Utilities/Props';
import { TurboWithoutChildren } from '../../Utilities/Types';
import './style.css';

export interface Props extends TurboWithoutChildren {
    active ?: boolean
    text: string
    onClick?: () => void
}

export const HeaderNav = ( props : Props ) => {

    const pallet = getCurrentPallet();

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    let style = { ... props} as CSSProperties
    let indicatorStyle = {} as any

    if (props.active) {
        style.color = pallet.accentText;
        indicatorStyle.background = pallet.primary;
    } 

    else {
        style.color = pallet.text
        indicatorStyle.background = hover ? pallet.grey : undefined
    } 

    return <div className="turboComp-header-nav" style={style}>
        <div className="turboComp-header-nav-indicator" style={indicatorStyle} />
        <MouseTracker 
            changeHover={setHover} 
            changeClick={setClick} 
            onClick={props.onClick}>
            
            { props.text }

        </MouseTracker>
    </div>
            
    
}

