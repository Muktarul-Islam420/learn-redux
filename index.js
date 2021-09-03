const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()


const BUY_ICECREAM = 'BUY_ICECREAM';
const BUY_CAKE = 'BUY_CAKE'


function buyIcecream(){
    return{
        type: BUY_ICECREAM,
        
    }
}

function buyCake(){
    return{
            type:BUY_CAKE,
            info: 'First cake buy'
    }
}


// const initialState = {
//     numberOfIcecream: 20,
//     numberOfCakes: 10
// }

 const initialIcecreamState = {
     numberOfIcecreams:20
 }

 const initialCakeState = {
     numberOfCakes:10
 }

// const reducer = (previousState, action) => new state

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_ICECREAM: return{
//             ...state,
//             numberOfIcecream: state.numberOfIcecream - 1
//         }
        
//         case BUY_CAKE: return{
//             ...state,
//             numberOfCakes: state.numberOfCakes - 1
//         }
//         default: return state
//     }
// }


const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return{
            ...state,
            numberOfIcecreams: state.numberOfIcecreams - 1
        }
        default: return state
    }
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    icecream:icecreamReducer,
    cake:cakeReducer
})


const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() =>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()