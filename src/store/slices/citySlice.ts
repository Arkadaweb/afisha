import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export const citySlice = createSlice({
    name: 'city',
    initialState: {
        isOpen: false,
        currentCity: 'Москва'
    },
    reducers: {
        setCity: (state: any, action: any) => {
            state.currentCity = action?.payload
        },
        setCityOpen: (state: any) => {
            state.isOpen = true
        },
        setCityClose: (state: any) => {
            state.isOpen = false
        },
    }
})

export const {setCity, setCityOpen, setCityClose} = citySlice.actions

export default citySlice.reducer
