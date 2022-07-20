import React, { CSSProperties, useState } from 'react';
import { ProgressPlugin } from 'webpack';
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';

export interface Props extends TurboWithChildren {
    mode : 'center'
}

export const Position = ( props : Props ) => {

    const style = {
        ...props.style
    }

    if (props.mode === 'center'){
        style.display = 'flex'
        style.justifyContent = 'center'
        style.alignItems = 'center'
    }

    return <div className='turboComp-position' style={style}>
        {props.children}
    </div>
};

