import { State } from 'react-native-gesture-handler';
import {UserAction} from '../actions';
import { FoodModel, UserModel, UserState } from '../models';
const initialState: UserState = {
    user: {} as UserModel,
    location: {} as Address,
    error: undefined,
}


const UserReducer = (state: UserState = initialState, actions: UserAction) => {

    switch(actions.type){
        case 'ON_UPDATE_LOCATION':
            return {
                ...state,
                location:actions.payload
            }
      
            
        default:
            return state;
    
            }
}


    


export {UserReducer}