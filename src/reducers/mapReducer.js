import {SET_MAP} from "../actions";

export default function(state = null, action){
    switch(action.type){
        case SET_MAP:
            state = action.payload;
            return state;
    }
    return state;
}