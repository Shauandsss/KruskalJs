/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import './Code.scss'

export default (props) => {
 

    useEffect (() => {

    }, [])
    
    return (
        <div  className="Code--Main">
            <pre>
                <code>
                    <text className="DarkBlue">function </text><text className="Yellow">executeKruskal</text><text className="Purple">(</text><text className="LightBlue">nos, vertices</text><text className="Purple">) &#123;</text><br></br>
                    <text className="DarkBlue">   var </text><text className="DarkBlue">mst</text> <text className="White">=</text> <text className="DarkBlue">[]</text>;<br></br>
                    <text className="DarkBlue">   var </text><text className="LightBlue">floresta </text> <text className="White">=</text> <text className="LightBlue"> _</text>.<text className="Yellow"> map</text><text className="LightBlue">(nos</text>,<text className="DarkBlue">function</text><text className="Yellow">(</text><text className="LightBlue">no</text><text className="Yellow">) &#123;</text><text className="Purple">return &#91;</text><text className="LightBlue">no</text><text className="Purple">&#93;</text>; <text className="Yellow">&#125;</text><text className="LightBlue">)</text>;  <br></br>             
                    <text className="DarkBlue">   var </text><text className="LightBlue">verticesOrdenados</text> <text className="White">=</text> <text className="LightBlue"> _</text>.<text className="Yellow">sortBy</text><text className="LightBlue">(vertices</text>, <text className="DarkBlue">function</text><text className="Yellow">(</text><text className="LightBlue">vertice</text><text className="Yellow">)</text><text className="Yellow">) &#123;</text><br></br><text className="Purple">       return</text> -<text className="LightBlue">vertice</text><text className="Purple">&#91;</text><text className="Green">2</text><text className="Purple">&#93;</text>; <text className="Yellow">&#125;</text><text className="LightBlue">)</text>;  <br></br>                 
                    <text className="Purple">   while</text><text className="LightBlue">(floresta</text>.<text className="LightBlue">length</text> &#62; <text className="Green">1</text> <text className="LightBlue">) &#123;</text> <br></br>
                    <text className="DarkBlue">       var </text><text className="LightBlue">vertice</text> <text className="White">=</text> <text className="LightBlue">verticesOrdenados</text>.<text className="Yellow">pop()</text><br></br>
                    <text className="DarkBlue">       var </text><text className="LightBlue">no1</text> <text className="White">=</text> <text className="LightBlue">vertice</text><text className="Yellow">&#91;</text><text className="Green">0</text><text className="Yellow">&#93;</text><text className="Yellow">,</text><br></br>
                    <text className="DarkBlue">           </text><text className="LightBlue">no2</text> <text className="White">=</text> <text className="LightBlue">vertice</text><text className="Yellow">&#91;</text><text className="Green">1</text><text className="Yellow">&#93;</text><text className="Yellow">;</text><br></br>
                    <text className="DarkBlue">       var </text><text className="LightBlue">t1</text> <text className="White">=</text> <text className="LightBlue"> _</text>.<text className="Yellow">filter(</text><text className="LightBlue">floresta</text>, <text className="DarkBlue">function</text><text className="Purple">(</text><text className="LightBlue">arvore</text><text className="Purple">) &#123;</text> <br></br>
                    <text className="Purple">         return</text> <text className="LightBlue">_</text>.<text className="Yellow">include</text><text className="LightBlue">(arvore</text>, <text className="LightBlue">no1)</text>;<br></br>
                    <text className="Purple">       &#125;</text><text className="Yellow">)</text>;<br></br>
                    <text className="DarkBlue">      var </text><text className="LightBlue">t2</text> <text className="White">=</text> <text className="LightBlue"> _</text>.<text className="Yellow">filter(</text><text className="LightBlue">floresta</text>, <text className="DarkBlue">function</text><text className="Purple">(</text><text className="LightBlue">arvore</text><text className="Purple">) &#123;</text> <br></br>
                    <text className="Purple">         return</text> <text className="LightBlue">_</text>.<text className="Yellow">include</text><text className="LightBlue">(arvore</text>, <text className="LightBlue">no2)</text>;<br></br>
                    <text className="Purple">       &#125;</text><text className="Yellow">)</text>;<br></br>
                    <text className="Purple">       if</text><text className="Yellow">(</text><text className="LightBlue">t1</text> <text className="White">!==</text> <text className="LightBlue">t2</text><text className="Yellow">) &#123;</text><br></br>
                    <text className="LightBlue">          floresta</text> <text className="White">=</text> <text className="LightBlue">_</text>.<text className="Yellow">without</text><text className="Purple">(</text><text className="LightBlue">floresta</text>, <text className="LightBlue"> t1[</text><text className="Green">0</text><text className="LightBlue">]</text>, <text className="LightBlue">t2[</text><text className="Green">0</text><text className="LightBlue">]</text><text className="Purple">)</text>;<br></br>
                    <text className="LightBlue">          floresta</text>.<text className="Yellow">push</text><text className="Purple">(</text><text className="LightBlue">_</text>.<text className="Yellow">union</text><text className="LightBlue">(t1</text><text className="Yellow">[</text><text className="Green">2</text><text className="Yellow">]</text>, <text className="LightBlue"> t2</text><text className="Yellow">[</text><text className="Green">0</text><text className="Yellow">]</text><text className="LightBlue">)</text><text className="Purple">)</text>;<br></br>
                    <text className="LightBlue">          mst</text>.<text className="Yellow">push</text><text className="Purple">(</text><text className="LightBlue">vertice</text><text className="Purple">)</text>;<br></br>
                    <text className="Yellow">       &#125;</text><br></br>
                    <text className="LightBlue">    &#125;</text><br></br>
                    <text className="Purple">&#125;</text><br></br>
                </code>
            </pre>
        </div>
    )
}

