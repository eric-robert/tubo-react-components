import { CSSProperties, ReactNode } from "react";
declare type MouseTracker = {
    changeHover?: (hover: boolean) => void;
    changeClick?: (click: boolean) => void;
    onClick?: () => void;
    children: ReactNode;
    style?: CSSProperties;
};
export declare function MouseTracker(props: MouseTracker): JSX.Element;
export {};
