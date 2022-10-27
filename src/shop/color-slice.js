import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
    name: 'color',
    initialState: {
        red: 0,
        green: 0,
        blue: 0
    },
    reducers: {
        add(state, action) {
            const { color, value } = action.payload;
            if (state[color] <= 255) {
                state[color] = state[color] += value;
            }
            if (state[color] > 255) {
                state[color] = 255;
            }
        },
        remove(state, action) {
            const { color, value } = action.payload;
            if (state[color] >= 0) {
                state[color] = state[color] -= value;
            }
            if (state[color] < 0) {
                state[color] = 0;
            }
        },
        min(state, action) {
            const { color } = action.payload;
            state[color] = 0;
        },
        max(state, action) {
            const { color } = action.payload;
            state[color] = 255;
        },
    }
});

export const colorActions = colorSlice.actions;
export default colorSlice; 