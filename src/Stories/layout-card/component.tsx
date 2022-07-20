import React, { CSSProperties, useState } from 'react';
import { getCurrentPallet } from '../../Utilities/ColorPallet';
import { ExtractNodesOfType, GetChildren } from '../../Utilities/Props';
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';

export interface Props extends TurboWithChildren {
    title ?: string;
}

export const Card = ( props : Props ) => {

    const children = GetChildren(props)
    const pallet = getCurrentPallet();
    const [Buttons, Other] = ExtractNodesOfType('PlainButton', children)

    const style = {
        border: `1px solid ${pallet.grey}`,
        ...props.style
    }

    const styleTitle = {
        color: pallet.text,
        border: `1px solid ${pallet.grey}`,
        background: pallet.background,
    }

    const divstyle = {
        background: pallet.grey,
    }

    const buttonsBase = Buttons.length > 0 ?
        <div className='turboComp-card-buttons'>
            <div className='turboComp-card-divider' style={divstyle} />
            <div className='turboComp-card-buttonpos'>
                {Buttons}
            </div>
        </div>
        : null;

    const labelTop = props.title ?
        <div className='turboComp-card-label' style={styleTitle}>
            {props.title}
        </div>
        : null;

    return <div className='turboComp-card' style={style}>
        {Other}
        {buttonsBase}
        {labelTop}
    </div>
};