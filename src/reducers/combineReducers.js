import {combineReducers} from 'redux';

import {bankingReducers} from './bankingReducers';
import {authReducer} from './authReducers';


export const rootReducer=combineReducers({
    auth:authReducer,
    banking:bankingReducers,
    
})