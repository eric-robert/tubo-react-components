import React from 'react';
import { ColorPallet, setCurrentPallet } from '../../Utilities/ColorPallet';
import { GetChildren } from '../../Utilities/Props';
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';

export interface Props extends TurboWithChildren {
    pallet?: ColorPallet;
}

export const StyleProvider = ( props : Props ) => {

    const children = GetChildren(props)
    if ( props.pallet ) setCurrentPallet(props.pallet)

    return <div style={props.style} className="turboComp-root">
        {children}
    </div>

}

