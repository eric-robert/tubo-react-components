/// <reference types="react" />
import { TurboWithoutChildren } from '../../Utilities/Types';
import './style.css';
export interface Props extends TurboWithoutChildren {
    active?: boolean;
    text: string;
    onClick?: () => void;
}
export declare const HeaderNav: (props: Props) => JSX.Element;
