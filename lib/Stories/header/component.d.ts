/// <reference types="react" />
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';
export interface Props extends TurboWithChildren {
    title?: string;
}
export declare const Header: (props: Props) => JSX.Element;
