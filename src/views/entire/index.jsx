import React, { useEffect, useState } from "react";
import { EntireWrapper } from './style'
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { changeHeaderConfigAction } from "@/store/modules/main";
import FilterSection from "./c-cpns/filter-section/index";
import HouseList from "./c-cpns/house-list/index"
import CPagination from "./c-cpns/c-pagination/index"
import { fetchEntireListAction } from "@/store/modules/entire";
import AppHeader from '@/components/app-header/index';
export default function Entire() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEntireListAction())
        dispatch(changeHeaderConfigAction({ topSearch: false, topFixed: true }))
    }, [dispatch])
    return (
        <EntireWrapper>
            <FilterSection />
            <HouseList />
            <CPagination />
        </EntireWrapper>
    )
}