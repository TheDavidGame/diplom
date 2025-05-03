import {createSlice} from '@reduxjs/toolkit';
import {MainSliceState} from "../../entity/index.entity";

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        isBar: false,
    } as MainSliceState,
    reducers: {
        switchIsBar: (state) => {
            state.isBar = !state.isBar;
        },
        setIsBar: (state, action) => {
            state.isBar = action.payload;
        }
    },
});

export const { switchIsBar, setIsBar } = mainSlice.actions;
export default mainSlice.reducer;