import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux'
import { DetailWrapper } from './style'
import { changeHeaderConfigAction } from "@/store/modules/main";
import HousePicture from './c-cpns/house-picture'
import AppHeader from '@/components/app-header/index';

export default function Datail(){
      const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
      }))
      const { picture_urls } = detailInfo
      const dispatch = useDispatch()
      useEffect(() => {
        dispatch(changeHeaderConfigAction({ topSearch: false, topFixed: false }))
      }, [dispatch])
    return(
        <DetailWrapper>
        <HousePicture picturesData={picture_urls}/>
        </DetailWrapper>
    )
} 