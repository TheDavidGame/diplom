import {createSlice} from '@reduxjs/toolkit';
import {MainSliceState} from "../../entity/index.entity";

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        isBar: false,
        selectedExclusions: [],
    } as MainSliceState,
    reducers: {
        switchIsBar: (state) => {
            state.isBar = !state.isBar;
        },
        setIsBar: (state, action) => {
            state.isBar = action.payload;
        },
        toggleExclusion: (state, action) => {
            const item = action.payload;
            if (state.selectedExclusions.includes(item)) {
                state.selectedExclusions = state.selectedExclusions.filter(i => i !== item);
            } else {
                state.selectedExclusions.push(item);
            }
        },
        clearFilters: (state) => {
            state.selectedExclusions = [];
        }
    },
});

export const { switchIsBar, setIsBar, toggleExclusion, clearFilters } = mainSlice.actions;
export default mainSlice.reducer;