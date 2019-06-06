import ListReducer from './ListReducer'
import CardReducer from './CardReducer'

//import * as redux from 'redux';
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import thunk from 'redux-thunk';
//import { reducer as formReducer} from 'redux-form'

export const init =() =>{
    const reducer =combineReducers({
        list:ListReducer,
        card:CardReducer
        
    })
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
    return store;

}  