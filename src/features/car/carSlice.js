import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: ["Outback", "BRZ", "Forester", "Legacy"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer