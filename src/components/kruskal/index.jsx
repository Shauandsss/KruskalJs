/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import './kruskal.scss'
import Lines from '../Lines'
import Code from '../Code'
import InputEdges from '../Input--Edges'
import InputNodes from '../Input--Nodes'


export default () => {
    const _ = require("underscore");
    const [edges, setEdges] = useState([[]])
    const [edgesSolved, setEdgesSolved] = useState([[]])
    const [nodes, setNodes] = useState([])
    const [positions, setPositions] = useState([[]])
    const [loading, setLoading] = useState()
    const [edgesVis, setEdgesVis] = useState("visible")
    const [edgesVisSol, setEdgesVisSol] = useState("hidden")
    const [v, setv] = useState([""]);

    var el = document.getElementById('BtnSolve');
    let x = el === null ? null : el.addEventListener("click", hidde);
    var el2 = document.getElementById('BtnBack');
    let x2 = el2 === null ? null : el2.addEventListener("click", show);

    function show(){
        setEdgesVis("visible")
        setEdgesVisSol("hidden")
    }
    function hidde(){
        setEdgesVis("hidden")
        setEdgesVisSol("visible")
    }


    useEffect (() => {
        const loadAll = async () => {
            setEdges([
                ["A", "B", 7], ["A", "D", 5],
                ["B", "C", 8], ["B", "D", 9], 
                ["B", "E", 7], ["C", "E", 5],
                ["D", "E", 15], ["D", "F", 6],
                ["E", "F", 8], ["E", "G", 9],
                ["F", "G", 11]
            ])
            setNodes(["A", "B", "C", "D", "E", "F", "G"])
        }         
        loadAll();
    }, [])

    useEffect (() => {
        const loadAll = async () => {
            if(edges !== undefined)
                setEdgesSolved(executeKruskal(nodes, edges))
        }         
        loadAll()
    }, [loading])


      useEffect (() => {
        const loadAll = () => {
            setPositions([  
            ["A", getPositionY(document.getElementById("A")), getPositionX(document.getElementById("A"))], 
            ["B", getPositionY(document.getElementById("B")), getPositionX(document.getElementById("B"))],
            ["C", getPositionY(document.getElementById("C")), getPositionX(document.getElementById("C"))], 
            ["D", getPositionY(document.getElementById("D")), getPositionX(document.getElementById("D"))], 
            ["E", getPositionY(document.getElementById("E")), getPositionX(document.getElementById("E"))], 
            ["F", getPositionY(document.getElementById("F")), getPositionX(document.getElementById("F"))],
            ["G", getPositionY(document.getElementById("G")), getPositionX(document.getElementById("G"))]])
            console.log("Seting positions")
        }
       
        loadAll();
        setLoading(true)
      },[edges])

    function getPositionX(element) {
        if (element == null)
            return
        
        var rect = element.getBoundingClientRect();
        return rect.x
    }
    function getPositionY(element) {
        if (element == null){
            return
        }
        var rect = element.getBoundingClientRect();
        
        return rect.y
    }
    function executeKruskal(nos, vertices) {
        if((nos !== undefined) && (edges !== undefined)){
            console.clear()
            var mst = [];
            var floresta = _.map(nos, function(no) { return [no]; });
            var verticesOrdenados = _.sortBy(vertices, function(vertice) { return -vertice[2]; });
            console.log(" - - - - - - - - - - - - - - - - - - - - - - - -")
            console.log("Vertices originais - ↓")
            console.log(vertices)
            console.log(" Tamanho da Floresta - " + floresta.length + " nós")
            console.log("Floresta Original - ↓")
            console.log(floresta)
            while(floresta.length > 1) {
                console.log(" - - - - - - - - - - - - - - - - - - - - - - - -")
                var vertice = verticesOrdenados.pop();
                var no1 = vertice[0],
                    no2 = vertice[1];
                var t1 = _.filter(floresta, function(arvore) {
                    return _.include(arvore, no1);
                });
                    
                var t2 = _.filter(floresta, function(arvore) {
                    return _.include(arvore, no2);
                });

                console.log("Verificando se [" + no1 + "] e [" + no2 + "] estão conectados      |")
        
                if (t1 !== t2) {
                    floresta = _.without(floresta, t1[0], t2[0]);
                    floresta.push(_.union(t1[0], t2[0]));
                    mst.push(vertice);
                    
                    console.log('Vertice sendo verificado - ["' + vertice[0] + '","'+vertice[1]+'","'+vertice[2]+'"]       |')
                    console.log("Floresta - ↓                                   |")
                    console.log(floresta)
                    
                }
            }
            return mst;
        }
    }

    function quandoClicar(valorGerado){
        console.log(valorGerado)
        setEdges(valorGerado)
        console.log(edges)
        setLoading(true)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="Btns">
                    <button id="BtnSolve" className="Btn">Resolver</button>
                    <button id="BtnBack" className="Btn">Retornar</button>
                </div>
                <div className="First-Col">
                    <div className="Input-Board">
                        <h2>Nós</h2> 
                        {nodes.length > 0 && nodes.map((val)=>{
                                    return  <InputNodes  className="Input--Nodes" key={val[0]} id={val[0]} value={val[0]}/>
                        })}
                        <h2>Vértices</h2>
                        <h4>Nó_1 | Nó_2 | Peso</h4> 

                        <div id="Main--Input--Edges" className="Main--Input--Edges">                
                            {edges.length > 0 && edges.map((val)=>{
                                        return  <InputEdges idMain="Main--Edges" onClicar={quandoClicar} className="Input--Edges" key={(val[0])+"_"+(val[1])} id={(val[0])+"_"+(val[1])} valueEdge1={val[0]} valueEdge2={val[1]} valueEdge3={val[2]}/>
                            })}
                            <InputEdges idMain="Input--Edges--News" onClicar={quandoClicar} className="Input--Edges"></InputEdges>
                        </div>
                    </div>
                </div>

        

                <div className="Second-Col">
                    <div ClassName="Main--Code">
                        <Code></Code>
                    </div>
                </div>
                <div className="MainNodes">
                    {nodes.length > 0 && nodes.map((val)=>{
                        return  <div key={val[0]} id={val[0]}>
                                    <h1>{val[0]}</h1>
                                </div>
                    })}
                {positions[0][1] !== undefined   
                    && <Lines data={positions} data2={edges} cN={"Lines"} visibility={edgesVis}/>} 
                {edgesSolved !== undefined
                    && <Lines data={positions} data2={edgesSolved} cN={"LinesSolved"} visibility={edgesVisSol}/>}  
                </div>
                <h1 className="Advice">não é completamente responsivo (trabalhando nisso), resolução ideal (1920x1080p)</h1>
            </div>
        </div>
    )
}