const redux = require('redux');
const createStore = redux.createStore;

const ADD_LAPTOP = 'ADD_LAPTOP';

function addLaptop(){
    return{
        type:ADD_LAPTOP,
        info: 'First laptop added'
    }
}

const initialState = {
    numbersOfLaptop:50
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_LAPTOP: return {
            ...state,
            numbersOfLaptop: state.numbersOfLaptop + 1
        }
        default: return state;
    }
}

const store = createStore(reducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(()=>
console.log('Updated laptop state', store.getState())
);
store.dispatch(addLaptop());
store.dispatch(addLaptop());
store.dispatch(addLaptop());

unsubscribe();