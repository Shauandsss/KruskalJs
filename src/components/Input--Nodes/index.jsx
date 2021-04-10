/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import './input--Nodes.scss'

export default (props) => {

    useEffect (() => {
        const loadAll = async () => {

        }
        loadAll()
    }, [])
 
    return (
        <>
            <input type="text" value={props.value} className="input--main"></input>
        </>
    )
}

