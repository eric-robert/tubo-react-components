/// <reference types="react" />
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';
export interface Props extends TurboWithChildren {
    mode: 'center';
}
export declare const Position: (props: Props) => JSX.Element;
