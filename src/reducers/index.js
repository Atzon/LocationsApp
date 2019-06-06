import { combineReducers } from 'redux';
import locationsReducer from './locationsReducer';
import mapReducer from './mapReducer';

const rootReducer = combineReducers({
    locations: locationsReducer,
    map: mapReducer
});

export default rootReducer;