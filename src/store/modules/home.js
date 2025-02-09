import { getHomeGoodPriceDate, getHomeHighScoreDate, getHomeDiscountDate, getHomeHotRecommendDate, getHomeLongforData, getHomePlusData } from "@/serices/index";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// 发送请求
export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch, getState }) => {
    getHomeGoodPriceDate().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreDate().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountDate().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotRecommendDate().then(res => {
        dispatch(changeRecommendInfoAction(res))
    })
    getHomeLongforData().then(res => {
        dispatch(changeLongforInfoAction(res))
    })
    getHomePlusData().then(res => {
        dispatch(changePlusInfoAction(res))
    })
});

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        longforInfo: {},
        plusInfo: {}
    },//数据
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload;
        },
        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload;
        },
        changeLongforInfoAction(state, { payload }) {
          state.longforInfo = payload
        },
        changePlusInfoAction(state, { payload }) {
          state.plusInfo = payload
        }
    },//方法
})
export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeRecommendInfoAction,changeLongforInfoAction,changePlusInfoAction} = homeSlice.actions;

export default homeSlice.reducer