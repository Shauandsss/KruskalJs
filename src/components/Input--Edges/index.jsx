/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import './input--Edges.scss'

export default (props) => {

    useEffect (() => {
        const loadAll = async () => {

        }
        loadAll()
    }, [])
 
    return (
        <div className="Main">
            <input type="text" value={props.valueEdge1} className="input--main"></input>
            <input type="text" value={props.valueEdge2} className="input--main"></input>
            <input type="text" value={props.valueEdge3} className="input--main"></input>
        </div>
    )
}

