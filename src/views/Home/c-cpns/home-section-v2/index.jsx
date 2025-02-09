import React, { useCallback, useState } from "react";
import PropTypes from "prop-types"

import SectionHeader from "@/components/section-header/index";
import SectionRooms from "@/components/section-rooms/index";
import SectionTabs from "@/components/section-tabs/index";
import { SectionV2Wrapper } from "./style";
import SectionFooter from '@/components/section-footer/index'

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}
export default function HomeSectionV2(props) {
    const { infoData } = props;

    // 定义内部的 state
    const initialName = Object.keys(infoData.dest_list??{})[0]??"";
    const [name, setName] = useState(initialName);
    // console.log(name);
    // 数据的转换
    const tabNames = infoData.dest_address?.map(item => item.name);

    const tabClickHandle = useCallback((index, name) => {
        setName(name)
    }, [])
    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData?.subtitle} />
            <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
            <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%" />
            <SectionFooter name={name}/>
        </SectionV2Wrapper>
    )
} 