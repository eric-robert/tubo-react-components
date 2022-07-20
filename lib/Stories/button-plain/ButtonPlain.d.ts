/// <reference types="react" />
import { ColorPallet } from '../../Utilities/ColorPallet';
import './ButtonPlain.css';
export interface ButtonProps {
    primary?: boolean;
    danger?: boolean;
    disabled?: boolean;
    text: string;
    pallet?: ColorPallet;
    onClick?: () => void;
    props?: any;
}
export declare const PlainButton: (_: ButtonProps) => JSX.Element;
