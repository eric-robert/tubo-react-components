export interface ColorPallet {


    text: string;
    primary: string;
    error: string;
    offwhite: string;
    grey: string;
    accentText: string;
    offDanger: string;

}

export const defaultPallet = {

    offwhite: '#fbfaff',
    grey: '#ebd9fc',

    error: '#d90816',
    offDanger: '#FDC4D1',
    
    primary: '#a713f6',
    text: '#190028',
    accentText: '#32004f',
    
} as ColorPallet