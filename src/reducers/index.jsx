import {combineReducers} from 'redux';
import slotReducer from './slotReducer';

const allReducers = combineReducers({
    slotview : slotReducer

});

export default allReducers;