import { CombinedState, combineReducers } from "redux";
import { shoppingReducer } from "./shoppingReducer";
import { useReducer } from "react";

const rootReducer = combineReducers ({
    useReducer: useReducer,
    shoppingReducer: shoppingReducer,
})

export type Applicationstate = ReturnType<typeof rootReducer>

export {rootReducer}