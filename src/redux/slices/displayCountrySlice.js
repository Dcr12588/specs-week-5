import { createSlice } from "@reduxjs/toolkit"
import initialCountry from '../../assets/initalCountry'

export const displayCountrySlice = createSlice(
    {
        name: 'displayCountry',
        initialState: 
        {
            value: initialCountry
        },
        reducers:
        {
            setDisplayCountry: (state,action) => {
                state.value = action.payload;
            },
            deleteDisplayCountry: (state) => {
                state.value = null;
            },
        },
    }
);