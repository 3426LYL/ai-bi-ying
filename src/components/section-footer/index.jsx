import React, { useEffect, useState } from "react";
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { FooterWrapper } from "./style";
import PropTypes from "prop-types"
import { useNavigate } from 'react-router-dom'
FooterWrapper.PropTypes = {
    name: PropTypes.string
}
export default function SectionFooter(props) {
    const { name } = props
    let showMessage = "显示全部"
    if (name) {
        showMessage = `显示更多${name}房源`
    }
    const navigate = useNavigate()
    function moreClickHandle() {
        navigate("/entire")
    }

    return (
        <FooterWrapper color={name ? "#00848A" : "#000"}>
            <div className='info' onClick={moreClickHandle}>
                <span className='text'>{showMessage}</span>
                <IconMoreArrow />
            </div>
        </FooterWrapper>
    )
} 