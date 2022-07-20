import React, { CSSProperties, useState } from 'react';
import { ProgressPlugin } from 'webpack';
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';

export interface Props extends TurboWithChildren {
    mode : 'row' | 'column'
    center ?: boolean
}

export const Collect = ( props : Props ) => {

    const style = {
        ...props.style
    }

    if (props.mode === 'row'){
        style.display = 'flex'
        style.justifyContent = props.center ? 'center' : 'left'
        style.alignItems = 'left'
    }

    if (props.mode === 'column'){
        style.display = 'flex'
        style.flexDirection = 'column'
        style.alignItems = props.center ? 'center' : 'left'
    }

    return <div className='turboComp-position' style={style}>
        {props.children}
    </div>
};

