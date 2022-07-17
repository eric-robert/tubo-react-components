import React, { CSSProperties, useState } from 'react';
import { ColorPallet, defaultPallet } from '../../Utilities/ColorPallet';
import { MouseTracker } from '../../Utilities/MouseTracker';
import { NavButton } from '../button-nav/ButtonNav';
import './ComponentFooter.css';

interface PropsFooter {
    pallet?: ColorPallet;
    children: React.ReactNode[];
}

interface PropsCatagory {
    title : string;
    children: React.ReactNode[];
}

export const Footer = ( _ : PropsFooter ) => {

    let { pallet, children } = _;
    if (!pallet) pallet = defaultPallet
    let style = {
        backgroundColor: pallet.offwhite,
    }

    return <div className='footer' style={style}>
        { children }
    </div>
            
};

export const FooterCategory = ( _ : PropsCatagory ) => {

    return <div className='footer-category'>
        <div className='footer-header'>{ _.title }</div>
        { _.children }
    </div>

}