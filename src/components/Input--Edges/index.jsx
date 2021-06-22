/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import './input--Edges.scss'

export default props => {

    useEffect (() => {
        const loadAll = async () => {

            document.getElementById(props.valueEdge1+"_"+props.valueEdge2+"_"+props.valueEdge3+"_1").defaultValue = props.valueEdge1;
            document.getElementById(props.valueEdge1+"_"+props.valueEdge2+"_"+props.valueEdge3+"_2").defaultValue = props.valueEdge2;
            document.getElementById(props.valueEdge1+"_"+props.valueEdge2+"_"+props.valueEdge3+"_3").defaultValue = props.valueEdge3;

        }
        loadAll()
    }, [])

    const getValues = () => {
        var x = document.getElementById("Main--Input--Edges")
        var i = 0;
        var arVal = [{}], temp = []
        while((x.childNodes[i] !== undefined) && (x.childNodes[i] !== null) && (x.childNodes[i] !== " ") && (x.childNodes[i].childNodes[2].value.length > 0)){
            temp.push(x.childNodes[i].childNodes[0].value)
            temp.push(x.childNodes[i].childNodes[1].value)
            temp.push(x.childNodes[i].childNodes[2].value)
            arVal.push(temp)
            temp = []
            i = i + 1
        }
        i = i - 1
        
        var newNode = document.getElementById("Input--Edges--News")
        if ((newNode.childNodes[0].value !== "") && (newNode.childNodes[1].value !== "") && (newNode.childNodes[2].value !== "")){
            newNode.childNodes[0].value = ""
            newNode.childNodes[1].value = ""
            newNode.childNodes[2].value = ""
        }
        //if((x.childNodes[i].childNodes[0].value.length > 0) && (x.childNodes[i].childNodes[1].value.length > 0) && (x.childNodes[i].childNodes[2].value.length > 0)){
        //    x.childNodes[i].childNodes[0].value = ""
        //    x.childNodes[i].childNodes[1].value = ""
        //    x.childNodes[i].childNodes[2].value = null
        //}
        
        arVal.shift()
        props.onClicar(arVal)
        
    }

    return (
        <div id={props.idMain} className="Main--Edges">
            <input type="text" onBlur={getValues} id={props.valueEdge1+"_"+props.valueEdge2+"_"+props.valueEdge3+"_1"} className="input--main"></input>
            <input type="text" onBlur={getValues} id={props.valueEdge1+"_"+props.valueEdge2+"_"+props.valueEdge3+"_2"} className="input--main"></input>
            <input type="number" onBlur={getValues} id={props.valueEdge1+"_"+props.valueEdge2+"_"+props.valueEdge3+"_3"} className="input--main"></input>
            
        </div>
        
    )   
}

