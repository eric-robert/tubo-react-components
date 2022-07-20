/// <reference types="react" />
import { ColorPallet } from '../../Utilities/ColorPallet';
import './ButtonFooter.css';
export interface ButtonProps {
    text: string;
    pallet?: ColorPallet;
    onClick?: () => void;
    props?: any;
}
export declare const FooterButton: (_: ButtonProps) => JSX.Element;
