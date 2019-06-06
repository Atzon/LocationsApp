export const ADD_LOCATION = 'ADD_LOCATION';
export const SET_MAP = 'SET_MAP';


export function setMap(map){
    return{
        type: SET_MAP,
        payload: map
    }
}

export function addLocation(){
    return{
        type: ADD_LOCATION,
        payload: null
    }
}