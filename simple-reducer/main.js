'use strict';

const { createStore } = require('redux');

const DEFAULT_STATE=0;

const counterReducer = (previousState = DEFAULT_STATE,action) => {
    const { type,payload = 1 } = action;
    switch(type){
        case 'INCREMENT_COUNTER':
            return previousState+payload;
        case 'DECREMENT_COUNTER':
            return previousState-payload;
        default:
            return previousState;
    }
};

const store = createStore(counterReducer);
console.log(store.getState());
store.dispatch({type: 'INCREMENT_COUNTER', payload: 100 });
console.log(store.getState());
store.dispatch({type: 'DECREMENT_COUNTER', payload: 1000});
console.log(store.getState());