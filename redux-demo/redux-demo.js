const redux = require('redux');

// reducer functions is normal javascript 
// function that accepts two parameters that is old state + dispatched action 
// and gives output new state object
const counterReducer = (state = {counter : 0}, action) => {
    // state is given a default value for first time the it runs it has a value
    // pure function that is gives same output for same input
   if(action.type === "increment"){
       return {
           counter : state.counter + 1
       };
   }
   if(action.type === "decrement"){
    return {
        counter : state.counter - 1
    };
}
};

const store = redux.createStore(counterReducer);
// store wants to know which reducer function can change the data

const counterSubscriber = () => {
    const latestState = store.getState();
    //  getState is available for store created using createStore
    //latest state will give latest state
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type : 'increment'});
store.dispatch({type : 'decrement'});

// dispatch is an redux object action that tells reducer function what to do