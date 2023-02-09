
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    newAds: {
        qno: 1,
        error:"",
        disableNext:true
    },
    filter:{
        showFilter:false
    }
}

const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
        next(state, { payload }) { state.newAds.qno !== 10 && ++state.newAds.qno ; state.newAds.disableNext = true },
        back(state, { payload }) { state.newAds.qno !== 1 && --state.newAds.qno },
        setQno(state, { payload }) { state.newAds.qno = payload },
        setError(state,{payload}){state.newAds.error = payload},
        setDisableNext(state,{payload}){state.newAds.disableNext=false},
        setShowFilter(state,{payload}){state.filter.showFilter = !state.filter.showFilter}
    }
});

export const { next, back, setQno,setError,setDisableNext,setShowFilter } = utilSlice.actions

export default utilSlice.reducer