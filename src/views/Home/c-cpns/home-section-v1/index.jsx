import React, { useState } from "react";
import PropTypes from "prop-types"

import SectionHeader from "@/components/section-header/index";
import SectionRooms from "@/components/section-rooms/index";
import SectionFooter from '@/components/section-footer/index'
import { SectionV1Wrapper } from "./style";

HomeSectionV1.propTypes = {
    infoData: PropTypes.object
}
export default function HomeSectionV1(props) {
    const {infoData} = props;
    return (
        <SectionV1Wrapper>
              <SectionHeader title={infoData.title}  subtitle={infoData?.subtitle}/>
              <SectionRooms roomList={infoData.list} itemWidth="25%"/>
              <SectionFooter/>
        </SectionV1Wrapper>
    )
} 