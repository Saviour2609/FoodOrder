import axios from "axios";
import { Dispatch } from "react";
import { BASE_URL } from '../../Utils'
import { FoodModel } from "../models";


export interface UpdateLocationAction{
    readonly type: 'ON_UPDATE_LOCATION',
    payload:Address
}

export interface UserErrorAction{
    readonly type: 'ON_USER_ERROR',
    payload: any
}

export interface UpdateCartAction{
    readonly type: 'ON_UPDATE_CART',
    payload: FoodModel
}

export interface UserLoginAction{
    readonly type: 'ON_USER_LOGIN',
    payload: string
}

