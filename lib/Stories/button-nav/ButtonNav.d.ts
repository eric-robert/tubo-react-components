/// <reference types="react" />
import { ColorPallet } from '../../Utilities/ColorPallet';
import './ButtonNav.css';
export interface ButtonProps {
    active?: boolean;
    text: string;
    pallet?: ColorPallet;
    onClick?: () => void;
    props?: any;
}
export declare const NavButton: (_: ButtonProps) => JSX.Element;
