import { configureStore, createSlice } from "@reduxjs/toolkit";

/*      Redux
    -Manages state in one component (store.js) that is accessed by 
    any component inside the <Provider> tag
    
    From Redux and Toolkit Library
    configureStore: where the Global State is stored
    createSlice: generates many parts of the store
    (creating a slice of the state)

    name: the name of the "state"
    initialState = {value: {variableName: ""}} //The initial state
    reducers.state -> previous state (ex: first pass indicates initial state)
    reducers.action -> modifies the state
    action.payload -> values passed into the action to change state

    In this login function -> the state.value is changed by action.payload
    The action.payload is changed by the input in the Login component
*/
const initialState = {value: {username: ""}}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) => {
            state.value = initialState.value; 
        }
    }
})

export const { login, logout } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
})