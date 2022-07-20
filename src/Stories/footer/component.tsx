import React, { useState } from 'react';
import { getCurrentPallet } from '../../Utilities/ColorPallet';
import { GetChildren } from '../../Utilities/Props';
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';

export interface Props extends TurboWithChildren {}

export const Footer = ( props : Props ) => {

    const children = GetChildren(props)
    const pallet = getCurrentPallet();

    const style = {
        background: pallet.grey,
        ...props.style
    }
    
    return <div style={style} className='turboComp-footer'>
        {children}
    </div>
    
}

