import React, { CSSProperties, useState } from 'react';
import { ColorPallet, defaultPallet } from '../../Utilities/ColorPallet';
import { MouseTracker } from '../../Utilities/MouseTracker';
import './ButtonPlain.css';

interface ButtonProps {
    
    primary?: boolean;
    danger?: boolean;
    disabled?: boolean;
    
    text: string;
    pallet?: ColorPallet;
    
    onClick?: () => void;

    props ?: any;

}

export const PlainButton = ( _ : ButtonProps ) => {

    let { primary, pallet, danger, text, onClick, props, disabled } = _;

    if (!pallet) pallet = defaultPallet

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    let style = { ... props};

    if (primary) {
        style.color = click ? pallet.offwhite : pallet.accentText
        style.background = click ? pallet.primary : 'none'
        style.background = hover && !click ? pallet.offPrimary : style.background
        style.border = `1px solid ${pallet.primary}`
    }

    else if ( danger ){
        style.color = click ? pallet.offwhite : pallet.accentText
        style.background = click ? pallet.error : 'none'
        style.background = hover && !click ? pallet.offError : style.background
        style.border = `1px solid ${pallet.error}`
    }

    else if ( disabled ){

        style.color = pallet.accentText
        style.background = pallet.grey
        style.opacity = 0.5
        style.border = `1px solid ${pallet.offwhite}`
        style.cursorEffects = 'none'
        style.cursor= 'not-allowed'

    }

    else {
        style.color = pallet.accentText
        style.background = click ? pallet.grey : 'none'
        style.background = hover && !click ? pallet.offwhite : style.background
        style.border = `1px solid ${pallet.grey}`
    } 

    return <div className="button-plain" style={style}>
        <MouseTracker 
            changeHover={setHover} 
            changeClick={setClick} 
            onClick={disabled ? undefined : onClick}>
            
            { text }

        </MouseTracker>
    </div>
            
};
