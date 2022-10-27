import { configureStore } from '@reduxjs/toolkit';
import colorSlice from './color-slice';

const store = configureStore({
    reducer: {
        color: colorSlice.reducer
    }
});

export default store;