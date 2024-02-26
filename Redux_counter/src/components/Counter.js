import { useSelector, useDispatch } from 'react-redux';
// useSelector is used more often bcoz that allows to automatically select a part managed by store

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  // dispatch here is a function which will dispatch action 
 const counter = useSelector(state => state.counter);
 const show = useSelector(state => state.showCounter);

 const incrementHandler = () => {
  dispatch( {type: "increment"} );
 }

 const increaseHandler = () => {
  dispatch({type : "increase", amount : 5})
  // we can pass additional details with type 
 }

 const decrementHandler = () => {
  dispatch({type : "decrement"})
 }
  // we need to pass a function to useSelector which tells which portion of code we want to select from store
  // when we use useSelector react automatically subscribes the component to store
  const toggleCounterHandler = () => {
    dispatch({type : "toggle"});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
