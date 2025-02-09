import React, { useState } from "react";
import PropTypes from "prop-types"
import { HeaderWrapper } from "./style";

SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}
export default function SectionHeader(props) {
    const { title, subtitle } = props;
    return (
        <HeaderWrapper>
            <h2 className="title">{title}</h2>
            {subtitle && <div className="subtitle">{subtitle}</div>}
        </HeaderWrapper>
    )
} 