import React, { CSSProperties, useState } from 'react';
import { ColorPallet, defaultPallet } from '../../Utilities/ColorPallet';
import { MouseTracker } from '../../Utilities/MouseTracker';
import { NavButton } from '../button-nav/ButtonNav';
import './ComponentHeader.css';

interface Props {
    
    active: string;
    text?: string;
    pallet?: ColorPallet;
    onClick?: (option : string) => void;    
    children: React.ReactNode[];
}

export const Header = ( _ : Props ) => {

    let { active, text, pallet, onClick, children } = _;
    if (!Array.isArray(children)) children = [children];

    if (!pallet) pallet = defaultPallet

    const navButtons : React.ReactNode[] = []
    const logos : React.ReactNode[] = []

    children.forEach( (child : any) => {
        if (child.type.name === 'NavButton'){
            navButtons.push(
                <NavButton
                    key={child.props.text}
                    active={child.props.text===active}
                    text={child.props.text}
                    pallet={pallet}
                    onClick={() => {
                        if (onClick) onClick(child.props.text);
                    }}
                    props={child.props.props}
                />
            )
        }
        else {
            logos.push(child)
        }
    })

    return <div className='header'>
        
        <div className='header-options'>
            {navButtons}
        </div>
        
        <div className='header-text'>
            {text}
        </div>
        
        <div className='header-logo'>
            {logos}
        </div>

    </div>
            
};
