/** @jsx html */

"use strict";

const { html } = require('snabbdom-jsx');
const snabbdom = require('snabbdom');
const R = require('ramda');
const View = require('./view.js')

const patch = snabbdom.init([
    require('snabbdom/modules/class').default,
    require('snabbdom/modules/props').default,
    require('snabbdom/modules/style').default,
    require('snabbdom/modules/dataset').default,
    require('snabbdom/modules/eventlisteners').default
]);

var model = { counter:0}


function actionUpdate(model, action) {
    console.log('Action', action)
    let actionType = action.type;
    switch(actionType){
        case 'add': 
            return R.assoc('counter', model.counter + 1, model);
        case 'subtract':
            return R.assoc('counter', model.counter - 1, model);
        default: return model
    }
}

let vnode = document.getElementById('container');

function updateUI() {
    const newVnode = <View model={model} handler={handler}/>
    vnode = patch(vnode, newVnode);
}

function handler(action) {
    model = actionUpdate(model, action)
    updateUI();
}

window.addEventListener('DOMContentLoaded', () => {
    console.log('window loaded');
    updateUI()
})