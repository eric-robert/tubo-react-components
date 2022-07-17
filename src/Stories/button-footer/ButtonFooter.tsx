import React, { CSSProperties, useState } from 'react';
import { ColorPallet, defaultPallet } from '../../Utilities/ColorPallet';
import { MouseTracker } from '../../Utilities/MouseTracker';
import './ButtonFooter.css';

interface ButtonProps {

    text : string;
    pallet?: ColorPallet;
    onClick?: () => void;
    props ?: any;

}

export const Button = ( _ : ButtonProps ) => {

    let { pallet, text, onClick, props } = _;

    if (!pallet) pallet = defaultPallet

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    let style = { ... props}

    return <div className="button" style={style}> { text } </div>
            
};
