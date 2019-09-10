import {createStore} from 'redux';

//pure function: bizlogic

// function reducer(state, action){
//        logic
// }

//creating reducer
function counterReducer(counter=0, action){
    switch(action.type){
        case 'INCREMENT':
            return counter +1;
        default:
            return counter;
}
}


//store creation

const store = createStore(counterReducer);


//action

const incrementAction={
    type : 'INCREMENT'
};


//listener

store.subscribe(function(){
    console.log(store.getState());
})

//dispatching the action

store.dispatch(incrementAction);

