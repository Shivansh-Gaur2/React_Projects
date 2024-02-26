import {createStore} from 'redux';

const initialState = {counter : 0, showCounter: true };
const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment'){
        return {
            counter : state.counter + 1,
            showCounter : state.showCounter
        };
    }
    if(action.type === 'increase'){
        return {
            counter : state.counter + action.amount,
            showCounter: state.showCounter
        };
    }
    if(action.type === 'decrement'){
        return {
            counter : state.counter-1,
            showCounter : state.showCounter
        }
    }
    if(action.type === 'toggle'){
        return {
            showCounter : !state.showCounter,
            counter : state.counter
        }
    }
    return state;
}


const store = createStore(counterReducer);
// creates our redux store with attached reducer function that can change the store


export default store;
//now i want to export store so that components can dispatch action and use store state
// we have only one store so we need to provide only once that is at highest level or root level