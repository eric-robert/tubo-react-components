import React from 'react';
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';
import * as Footer from '../footer/component.stories';
import * as Header from '../header/component.stories';

export interface Props extends TurboWithChildren {
    title ?: string;
}

export const Page = ( props : Props ) => {

    return <div style={props.style} className="turboComp-page">
        <Header.Example />
        {props.children}
        <Footer.Example />
    </div>

}

