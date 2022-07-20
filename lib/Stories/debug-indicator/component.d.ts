/// <reference types="react" />
import { TurboWithoutChildren } from '../../Utilities/Types';
import './style.css';
export interface Props extends TurboWithoutChildren {
    width?: number;
    height?: number;
}
export declare const Debug: (props: Props) => JSX.Element;
