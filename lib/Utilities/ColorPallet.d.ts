export interface ColorPallet {
    text: string;
    accentText: string;
    primary: string;
    offPrimary: string;
    error: string;
    offError: string;
    background: string;
    offwhite: string;
    grey: string;
}
export declare let defaultPallet: ColorPallet;
export declare const getCurrentPallet: () => ColorPallet;
export declare const setCurrentPallet: (pallet: ColorPallet) => void;
export declare const randomColor: () => string;
