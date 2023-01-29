import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    newAds: {
        qno: 1
    }
}

const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
        next(state, { payload }) { state.newAds.qno !== 10 && ++state.newAds.qno },
        back(state, { payload }) { state.newAds.qno !== 1 && --state.newAds.qno },
        setQno(state, { payload }) { state.newAds.qno = payload }
    }
});

export const { next, back, setQno } = utilSlice.actions

export default utilSlice.reducer