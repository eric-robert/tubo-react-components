import React from 'react';
import { ColorPallet } from '../../Utilities/ColorPallet';
import './ComponentFooter.css';
export interface PropsFooter {
    pallet?: ColorPallet;
    children: React.ReactNode[];
}
export interface PropsCatagory {
    title: string;
    children: React.ReactNode[];
}
export declare const Footer: (_: PropsFooter) => JSX.Element;
export declare const FooterCategory: (_: PropsCatagory) => JSX.Element;
