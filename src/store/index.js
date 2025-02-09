import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import homeSlice from './modules/home'
import entireSlice from './modules/entire'
import detailSlice from './modules/detail'; 
import mainSlice from './modules/main'; 

const persistConfighome = {
    key: 'root',
    storage,
}
const persistConfigentire = {
    key: 'root',
    storage,
}
const persistConfigdetail = {
    key: 'root',
    storage,
}
const persistConfigmain = {
    key: 'root',
    storage,
}
const persistedhomeReducer = persistReducer(persistConfighome, homeSlice)
const persistedentireReducer = persistReducer(persistConfigentire, entireSlice)
const persisteddetailReducer = persistReducer(persistConfigdetail, detailSlice)
const persistedmainReducer = persistReducer(persistConfigmain, mainSlice)

export const store=configureStore({
    reducer:{
        home:persistedhomeReducer,
        entire: persistedentireReducer,
        detail: persisteddetailReducer,
        main: persistedmainReducer,
    }
})
export const persistor = persistStore(store)