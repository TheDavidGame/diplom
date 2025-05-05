import {createSlice} from '@reduxjs/toolkit';
import {MainSliceState} from "../../entity/index.entity";

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        isBar: false,
        selectedDiet: null,
        selectedExclusions: [],
    } as MainSliceState,
    reducers: {
        switchIsBar: (state) => {
            state.isBar = !state.isBar;
        },
        setIsBar: (state, action) => {
            state.isBar = action.payload;
        },
        setSelectedDiet: (state, action) => {
            state.selectedDiet = action.payload;
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
            state.selectedDiet = null;
            state.selectedExclusions = [];
        }
    },
});

export const { switchIsBar, setIsBar, setSelectedDiet, toggleExclusion, clearFilters } = mainSlice.actions;
export default mainSlice.reducer;