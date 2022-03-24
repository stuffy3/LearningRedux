 const redux = require('redux')
 const reduxLogger = require('redux-logger')
 const applyMiddleware = redux.applyMiddleware

 const createStore = redux.createStore
 const combineReducers = redux.combineReducers
 const logger = reduxLogger.createLogger()
 const BUY_CAKE = 'BUY_CAKE'
 const BUY_ICECREAM = 'BUY_ICECREAM'

 function buyCake() {
     return {
        type: BUY_CAKE,
        info: "first Redux action"
    }
 }

 function buyIceCream() {
     return {
         type: BUY_ICECREAM
     }
 }

 //(previouseState, action) => newState

//  const initialState = {
//      numOfCakes: 10,
//      numOfIceCreams: 20
//  }

 const initialCakeState = {
     numOfCakes: 10
 }

 const initialIceCreamState = {
     numOfIceCreams: 20
 }

 const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state, //ask the reducer  to make a copy of the state
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
 }

 const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCreams - 1
        }

        default: return state
    }
 }
 //how to create multiple reducers, in order to reach the state you have to use the key state.cake.numOfCakes
 const rootReducer = combineReducers({
     cake: cakeReducer,
     iceCream: iceCreamReducer
 })
 const store = createStore(rootReducer, applyMiddleware(logger))
 console.log('Initial state', store.getState())
 const unsubscribe = store.subscribe(() => {})
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyIceCream())
 store.dispatch(buyIceCream())
 store.dispatch(buyCake())
 unsubscribe()