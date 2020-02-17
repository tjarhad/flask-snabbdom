/** @jsx html */
'use strict'
import { html } from 'snabbdom-jsx';

function view ( {model, handler}){
    return <div>
        <div selector=".counter"> {model.counter} </div>
        <button selector=".plus" dataset={({value: "1"})} on-click={(e) => handler({type:'add', payload:e})}> +</button>
        <button selector=".minus" dataset={({value: "2"})} on-click={(e) => handler({type:'subtract', payload:e})}> - </button>
    </div>
}


module.exports = {
    view
}