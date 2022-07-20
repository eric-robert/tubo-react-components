export interface ColorPallet {

    // Text
    text: string,
    accentText: string;

    // Pallet
    primary: string;
    offPrimary: string;
    error: string;
    offError: string;

    // Background   
    background: string;
    offwhite: string;
    grey: string;

}

export let defaultPallet = {

    // Text
    text: '#20343B',
    accentText: 'Black',

    // Pallet
    primary: '#DC5ECB',
    offPrimary: '#FFD5F9',
    error: '#FF1B51',
    offError: '#FFB9CA',
    
    // Background
    offwhite: '#fbfaff',
    grey: '#E0E0E0',
    background: '#fff',
    
} as ColorPallet

export const getCurrentPallet = () => {
    return defaultPallet
}

export const setCurrentPallet = (pallet : ColorPallet) => {
    defaultPallet = pallet
}

export const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}