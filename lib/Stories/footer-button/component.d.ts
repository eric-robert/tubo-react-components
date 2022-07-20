/// <reference types="react" />
import { TurboWithoutChildren } from '../../Utilities/Types';
import './style.css';
export interface Props extends TurboWithoutChildren {
    text: string;
    onClick?: () => void;
}
export declare const FooterButton: (props: Props) => JSX.Element;
