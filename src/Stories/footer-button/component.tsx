import React, { useState } from 'react';
import { TurboWithoutChildren } from '../../Utilities/Types';
import './style.css';

export interface Props extends TurboWithoutChildren {
    text : string;
    onClick?: () => void;
}

export const FooterButton = ( props : Props ) => {

    return <div 
        className="turboComp-footer-button turboComp-smalltext" 
        style={props.style} 
        onClick={props.onClick}> 

        { props.text } 
    
    </div>

}

