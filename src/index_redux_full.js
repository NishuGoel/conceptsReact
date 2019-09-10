// import React from 'react';
// import ReactDOM from 'react-dom';

// // function Hello(){
// //     return <h1>Hello</h1>;
// // }

// const Header = () => <h1>Header</h1>;
// const Main = () => <h1>Main</h1>;
// const Footer = () => <h1>Footer</h1>;


// const Application = () => <React.Fragment>
// <Header></Header><Main></Main><Footer></Footer></React.Fragment>;

// // ReactDOM.render(<Hello></Hello>, document.getElementById("root"));
// ReactDOM.render(<Application></Application>, document.getElementById("root"));

// import {createStore} from 'redux';

// //pure function: bizlogic

// // function reducer(state, action){
// //        logic
// // }

// //creating reducer
// function counterReducer(counter=0, action){
//     switch(action.type){
//         case 'INCREMENT':
//             return counter +1;
//         default:
//             return counter;
// }
// }


// //store creation

// const store = createStore(counterReducer);


// //action

// const incrementAction={
//     type : 'INCREMENT'
// };


// //listener
import React, {Component} from 'react';
import {render} from 'react-dom';
import {provider, connect} from 'react-redux';
import {createStore} from 'redux';
import {ReactDOM} from 'react-dom';



const incrementAction={
    type : 'INCREMENT'
};
const store = createStore(counterReducer);


store.subscribe(function(){
    console.log(store.getState());
})

//dispatching the action

store.dispatch(incrementAction);



//REDUX CODE




//creating reducer
function counterReducer(counter=0, action){
    switch(action.type){
        case 'INCREMENT':
            return counter +1;
        default:
            return counter;
}
}

//action


//store creation

//mapper fucntion

const mapStateToProp = counter => 
({
        counter

});

const CounterHOC = connect(mapStateToProp)(Counter)


//REDUX CODE


//REACT CODE

class Counter extends Component{
    render(){
        return (<div className="container"><h1>react-redux counter</h1></div>
       )
    }
}

const App = () => {
    return <CounterHOC/>
}

render(<App/>, document.getElementById("root"));

//REACT CODE