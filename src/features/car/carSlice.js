import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: ["Outback", "BRZ", "Legacy", "Forester"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer