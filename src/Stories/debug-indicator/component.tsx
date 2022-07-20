import React, { CSSProperties, useState } from 'react';
import { ProgressPlugin } from 'webpack';
import { ColorPallet, defaultPallet, randomColor } from '../../Utilities/ColorPallet';
import { TurboWithoutChildren } from '../../Utilities/Types';
import './style.css';

export interface Props extends TurboWithoutChildren {
    width ?: number;
    height ?: number;
}

export const Debug = ( props : Props ) => {

    const style = {
        ...props.style,
        width: props.width || '100%',
        height: props.height || '100%',
        background: randomColor(),
    }

    return <div className='turboComp-debug' style={style}></div>
};

