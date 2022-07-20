import React, { useState } from 'react';
import { getCurrentPallet } from '../../Utilities/ColorPallet';
import { ExtractNodesOfType, GetChildren } from '../../Utilities/Props';
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';

export interface Props extends TurboWithChildren {
    title ?: string
}

export const Header = ( props : Props ) => {

    const children = GetChildren(props)
    const [Navs, Other] = ExtractNodesOfType( 'HeaderNav', children )

    const style = {
        ...props.style
    }
    
    return <div style={style} className='turboComp-header'>
        
        <div className='turboComp-header-navs'>
            {Navs}
        </div>
        
        <div className='turboComp-header-title'>
            {props.title}
        </div>
        
        <div className='turboComp-header-other'>
            {Other}
        </div>

    </div>
    
}

