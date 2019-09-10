import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { ReactDOM } from 'react-dom';

// Action CONSTANTS

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//Actions

const incrementAction = {
    type: INCREMENT
}

const decrementAction = {
    type: DECREMENT
}

//reducers

function incrementReducer(counter = 10, action) {
    switch (action.type) {
        case 'INCREMENT':
            return counter + 1;
        default:
            return counter;
    }
}

function decrementReducer(counter = 10, action) {
    switch (action.type) {
        case 'DECREMENT':
            return counter - 1;
        default:
            return counter;
    }
}

//create Store
//for passing multiple reducers in one store, we use compositions
//combine reducers in one objectHash, that object is passed to store.

//To combine reducers
const config = {
    incrementReducer,
    decrementReducer
}

const appReducers = combineReducers(config);

// Supplying the multiple reducer object to the store
const appstore = createStore(appReducers);

//presentation

const IncrementDisplayBoard = props => (<div className = "container"><h1>Counter {props.counter}</h1><button onClick= {() => props.dispatch(incrementAction)}>+</button></div>)

const DecrementDisplayBoard = props => (<div className="container">
      <h1>React-Redux-CounterApp :Decrement</h1>
      <h2>Counter {props.counter}</h2>
      <button onClick={() => props.dispatch(decrementAction)} className="btn btn-success">-</button>
</div>)

// Component

class IncrementComponent extends Component {
    render() {
        return (<Fragment>
                <IncrementDisplayBoard {...this.props} />
            </Fragment>)
    }
}
class DecrementComponent extends Component {
    render() {
        
        return  (<Fragment>
                  <DecrementDisplayBoard {...this.props} />
                </Fragment>)

    }
}

//stateMapper configuration for multiple reducers

const incrementMapper = state => {
    return {
        counter: state.incrementReducer
    }
}


const decrementMapper = state => {
    return {
        counter: state.decrementReducer
    }
}


const IncrementHOC = connect(incrementMapper)(IncrementComponent);
const DecrementHOC = connect(decrementMapper)(DecrementComponent);

const App = () => {
    return <Fragment>
        <Provider store={appstore}>
            <IncrementHOC />
            <DecrementHOC />
        </Provider>
    </Fragment>
}

render(<App />, document.getElementById("root"));
