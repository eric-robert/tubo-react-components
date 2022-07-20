import React from 'react';
import { ColorPallet } from '../../Utilities/ColorPallet';
import './ComponentHeader.css';
export interface Props {
    active: string;
    text?: string;
    pallet?: ColorPallet;
    onClick?: (option: string) => void;
    children: React.ReactNode[];
}
export declare const Header: (_: Props) => JSX.Element;
