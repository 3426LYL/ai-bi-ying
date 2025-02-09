import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import '../../../assets/CSS/index.less'
import { HomeWrapper } from "./style";
import HomeBanner from "./home-banner/index";
import { fetchHomeDataAction } from "@/store/modules/home";
import { changeHeaderConfigAction } from "@/store/modules/main";
import HomeSectionV1 from "./home-section-v1/index";
import HomeSectionV2 from "./home-section-v2/index";
import HomeSectionV3 from "./home-section-v3/index";
import HomeLongfor from "./home-longfor/index";
import AppHeader from '@/components/app-header/index';

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        // 触发action发送请求
        dispatch(fetchHomeDataAction("xxxx"))
        dispatch(changeHeaderConfigAction({ topSearch: true, topFixed: true }))
    }, [dispatch])
    // 获取redux中的数据
    const { goodPriceInfo, highScoreInfo, discountInfo,recommendInfo,longforInfo, plusInfo } = useSelector(state => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        longforInfo: state.home.longforInfo,
        plusInfo: state.home.plusInfo
    }), shallowEqual);
    console.log(recommendInfo);
    return (
        <HomeWrapper>
            {/* 轮播图部分 */}
            <div><HomeBanner /></div>
            {/* 中心内容部分 */}
            <div className="content">
                {/* 高性价比数据 */}
                {Object.keys(goodPriceInfo).length && <HomeSectionV1 infoData={goodPriceInfo} />}
                {/* 高评分数据 */}
                {Object.keys(highScoreInfo).length && <HomeSectionV1 infoData={highScoreInfo} />}
                {/* 折扣数据 */}
                {Object.keys(discountInfo).length && <HomeSectionV2 infoData={discountInfo} />}
                {/* 热门推荐数据 */}
                {Object.keys(recommendInfo).length && <HomeSectionV2 infoData={recommendInfo} />}
                {Object.keys(longforInfo).length && <HomeLongfor infoData={longforInfo} />}
                {Object.keys(plusInfo).length && <HomeSectionV3 infoData={plusInfo} />}
            </div>

        </HomeWrapper>
    )
} 