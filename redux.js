const redux = require('redux');

const initialState = {
    count : 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'increment':
            return{
                ...state,
                count: state.count + 1,
            }
        case 'decrement':
            return{
                ...state,
                count: state.count - 1,
            }
        case 'SET':
            return{
                ...state,
                count: action.payload,
            }
        default:
            return state;
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => console.log(store.getState()));
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
store.dispatch({type: 'SET', payload: 100});