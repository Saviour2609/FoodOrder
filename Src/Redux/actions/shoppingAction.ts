import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL } from '../../Utils'
import { FoodAvailability, FoodModel } from "../models";


export interface AvailabilityAction{
    readonly type: 'ON_AVAILABILITY',
    payload: FoodAvailability
}


export interface FoodSearchAction{
    readonly type: 'ON_FOODS_SEARCH',
    payload: [FoodModel]
}

export interface ShoppingErrorAction{
    readonly type: 'ON_SHOPPING_ERROR',
    payload: any
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction | FoodSearchAction 

export const onAvailability = () => {

    return async ( dispatch: Dispatch<ShoppingAction>) => {

        try {
           
            const response = await axios.get<FoodAvailability>(`${BASE_URL}food/availability/78787878`)

if(!response){
    dispatch({
        type:'ON_SHOPPING_ERROR',
        payload: 'Availability error'
    })
}else{
    dispatch({
        type: 'ON_AVAILABILITY',
        payload:response.data
    })

}

            dispatch({
                type: 'ON_AVAILABILITY',
                payload: location
            })

        } catch (error) {
            dispatch({
                type:'ON_SHOPPING_ERROR',
                payload: error
            })
        }

    }

}
