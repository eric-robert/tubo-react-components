import { CSSProperties, ReactNode, useState } from "react";

type MouseTracker = {
    changeHover ?: (hover : boolean) => void
    changeClick ?: (click : boolean) => void
    onClick ?: () => void
    children : ReactNode
    style ?: CSSProperties
}

export function MouseTracker ( props : MouseTracker ){

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);
    
    const changeHover = (hover : boolean) => {
        setHover(hover);
        if (props.changeHover) props.changeHover(hover);
    }
    
    const changeClick = (click : boolean) => {
        setClick(click);
        if (props.changeClick) props.changeClick(click);
        if (!click) 
            setHover(false);
    }

    const style = {
        width: 'fit-content',
        height: 'fit-content',
        display: 'inherit'
    }
    
    return <div 
        onMouseEnter={() => changeHover(true)}
        onMouseLeave={() => changeHover(false)}
        onMouseDown={() => changeClick(true)}
        onMouseUp={() => changeClick(false)}
        onClick={props.onClick}
        style={{...style, ...props.style}}
    >
        { props.children }
    </div>

}