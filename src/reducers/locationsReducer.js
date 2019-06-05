import {ADD_LOCATION} from "../actions";

export default function(state = null, action){
    switch(action.type){
        case ADD_LOCATION:
            return action.payload;
    }
    return state;
}