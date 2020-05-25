import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'app',
    initialState: {
        loading: false
    },
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload.loading;
        }
    }
})

export const { setLoading } = slice.actions

export default slice.reducer