/// <reference types="react" />
import { ColorPallet } from '../../Utilities/ColorPallet';
import { TurboWithChildren } from '../../Utilities/Types';
import './style.css';
export interface Props extends TurboWithChildren {
    pallet?: ColorPallet;
}
export declare const StyleProvider: (props: Props) => JSX.Element;
