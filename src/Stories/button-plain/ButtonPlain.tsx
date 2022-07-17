import React, { CSSProperties, useState } from 'react';
import { ColorPallet, defaultPallet } from '../../Utilities/ColorPallet';
import { MouseTracker } from '../../Utilities/MouseTracker';
import './ButtonPlain.css';

interface ButtonProps {
    
    primary?: boolean;
    danger?: boolean;
    
    text: string;
    pallet?: ColorPallet;
    
    onClick?: () => void;

    props ?: any;

}

export const Button = ( _ : ButtonProps ) => {

    let { primary, pallet, danger, text, onClick, props } = _;

    if (!pallet) pallet = defaultPallet

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    let style = { ... props};

    if (primary) {
        style.color = click ? pallet.offwhite : pallet.accentText
        style.background = click ? pallet.primary : pallet.grey
        style.border = `2px solid ${pallet.primary}`
    } 

    else if ( danger ){
        style.color = click ? pallet.offwhite : pallet.accentText
        style.background = click ? pallet.error : pallet.offDanger
        style.border = `2px solid ${pallet.error}`
    }

    else {
        style.color = pallet.accentText
        style.background = click ? pallet.grey : pallet.offwhite
        style.border = `2px solid ${pallet.grey}`
    } 

    return <div className="button" style={style}>
        <MouseTracker 
            changeHover={setHover} 
            changeClick={setClick} 
            onClick={onClick}>
            
            { text }

        </MouseTracker>
    </div>
            
};
