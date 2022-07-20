import React, { CSSProperties } from 'react';
import { ColorPallet } from '../../Utilities/ColorPallet';
import './LayoutContainer.css';
export interface Props {
    text?: string;
    pallet?: ColorPallet;
    children: React.ReactNode[] | React.ReactNode;
    style?: CSSProperties;
}
export declare const Container: (_: Props) => JSX.Element;
