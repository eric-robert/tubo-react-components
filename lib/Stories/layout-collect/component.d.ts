/// <reference types="react" />
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';
export interface Props extends TurboWithChildren {
    mode: 'row' | 'column';
    center?: boolean;
}
export declare const Collect: (props: Props) => JSX.Element;
