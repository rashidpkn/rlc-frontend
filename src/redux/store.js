import { configureStore } from "@reduxjs/toolkit";
import adsSlice from "./slice/adsSlice";
import userSlice from "./slice/userSlice";
import utilSlice from "./slice/utilSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        util: utilSlice,
        ads: adsSlice,
    }
})

export default store