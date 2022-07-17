import React, { CSSProperties, useState } from 'react';
import { ColorPallet, defaultPallet } from '../../Utilities/ColorPallet';
import { PlainButton } from '../button-plain/ButtonPlain';
import './LayoutContainer.css';

interface Props {
    text?: string;
    pallet?: ColorPallet;
    children: React.ReactNode[] | React.ReactNode;
    style ?: CSSProperties
}

export const Container = ( _ : Props ) => {

    let { text, pallet, children, style } = _;
    if (!pallet) pallet = defaultPallet
    let childrenArray = Array.isArray(children) ? children : [children];

    let rootStyle = {
        color: pallet.text,
        border: `1px solid ${pallet.grey}`,
        background: pallet.background,
        ...style
    } as CSSProperties;

    let style_label = {
        color: pallet.text,
        border: `1px solid ${pallet.grey}`,
        background: pallet.background,
    }

    const buttons : React.ReactNode[] = []
    const content : React.ReactNode[] = []

    childrenArray.forEach( (child : any) => {
        if (child.type.name === 'PlainButton'){
            buttons.push(
                <PlainButton
                    key={child.props.text}
                    primary={child.props.primary}
                    text={child.props.text}
                    pallet={pallet}
                    onClick={child.props.onClick}
                    danger={child.props.danger}
                    disabled={child.props.disabled}
                    {...child.props.props}
                />
            )
            rootStyle.paddingBottom = '10px'
        }
        else {
            content.push(child)
        }
    })

    const dividerStyle = {background: pallet.grey}
    const divider = <div className='container-divider' style={dividerStyle} />
    const label = <div className='container-label' style={style_label} children={text} />

    return <div className='container' style={rootStyle}>
        { text && label }
        {content}
        { buttons.length && divider}
        <div className='right-container'>
            {buttons}
        </div>
    </div>
            
};

