import React, { useState } from 'react';
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';

export interface Props extends TurboWithChildren {
    text : string;
}

export const FooterSection = ( props : Props ) => {

    return <div style={props.style}> 
        <div className='turboComp-smalltext turboComp-footer-sectiontext'> {props.text} </div>
        <div className='turboComp-footer-sectioncontent'> {props.children} </div>
    </div>
    
}

