export interface TurboWithoutChildren {
    style?: React.CSSProperties;
}

export interface TurboWithChildren {
    children?: React.ReactNode | React.ReactNode[];
    style?: React.CSSProperties;
}
