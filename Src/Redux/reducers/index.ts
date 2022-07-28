import { CombinedState, combineReducers } from "redux";
import { ShoppingReducer } from "./shoppingReducer";
import { useReducer } from "react";

const rootReducer = combineReducers ({
    useReducer: useReducer,
    shoppingReducer: ShoppingReducer,
})

export type Applicationstate = ReturnType<typeof rootReducer>

export {rootReducer}