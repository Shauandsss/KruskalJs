/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import './Lines.scss'

export default (props) => {
    const [positions, setPositions] = useState([[]])
    const [edges, setEdges] = useState([[]])
    
    useEffect (() => {
        const loadAll = async () => {
            setPositions(props.data)
            setEdges(props.data2)
        }
        loadAll()
    }, [positions])

    document.addEventListener('DOMContentLoaded', function () {
     //   document.getElementById("Btn").addEventListener("click", returnLeft("A"));
    });
 
    const getElementPosit = ( el, tl ) => {
        for(var i=0;i<positions.length;i++){
            if(positions[i][0] === el){   
                return positions[i][tl]
            }
        }
    }
    const getEdgesPosit = ( el1, el2, coordinate ) => {
        for(var i=0;i<positions.length;i++){
            if(positions[i][0] === el1){   
                var xy1 = positions[i][coordinate]
            }
            if(positions[i][0] === el2){   
                var xy2 = positions[i][coordinate]
            }
        }
        return (xy1 + xy2)/2 
    }
    return (
            <svg className={props.cN} visibility={props.visibility}>
                    {positions[0][1] > 0 && positions[0][1] !== undefined && edges.map((val)=> {
                        return <>
                                <line  className="Line" 
                                    key={(val[0])+"_"+(val[1])} 
                                    id={(val[0])+"_"+(val[1])} 
                                    x1={-620 + getElementPosit(val[0], 2)} 
                                    y1={-160 + getElementPosit(val[0], 1)} 
                                    x2={-620 + getElementPosit(val[1], 2)} 
                                    y2={-160 + getElementPosit(val[1], 1)} 
                                    stroke="White">
                                </line>  
                                <text className="TextLine" x={-620 + getEdgesPosit(val[0], val[1], 2)} y={-160 + getEdgesPosit(val[0], val[1], 1)} fill="white">{val[2]}</text>    
                               </>
                    })}
            </svg>

    )
}

