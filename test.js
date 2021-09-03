const redux = require('redux');

const createStore = redux.createStore;


const BUY_MOBILE = 'BUY_MOBILE';

 function buyMobile(){
     return{
         type: BUY_MOBILE,
         info: 'Buy first mobile'
     }
 }

 const initialState = {
     numOfMobile : 10
 }

 const reducer = (state = initialState, action) =>{
     switch(action.type){   
        case BUY_MOBILE : return {
            ...state,
            numOfMobile: state.numOfMobile - 1
         }
         default: return state
     }
 }

const store = createStore(reducer);
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() =>{
    console.log('Update state', store.getState());
})

store.dispatch(buyMobile())
store.dispatch(buyMobile())
store.dispatch(buyMobile())

unsubscribe();