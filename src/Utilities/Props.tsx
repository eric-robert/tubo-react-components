import { ReactNode } from "react";
import { ColorPallet } from "./ColorPallet";

export function GetChildren ( props : any ) : ReactNode[] {

    if ( !props.children ) return []
    if ( Array.isArray(props.children) ) return props.children
    return [props.children]

}

export function ExtractNodesOfType ( name: string, nodes : ReactNode[] ) : [ReactNode[], ReactNode[]] {

    const yes : ReactNode[] = []
    const no : ReactNode[] = []

    nodes.forEach( (node : any) => {
        if ( node.type.name === name ) yes.push(node)
        else no.push(node)
    })
    
    return [yes, no]

}