import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../slices/mainSlice'

export const store = configureStore({
    reducer: {
        mainSlice: mainReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
