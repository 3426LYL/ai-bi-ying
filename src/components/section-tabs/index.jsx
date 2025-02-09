import React, { useEffect, useState } from "react";
import ScrollView from '@/base-ui/scroll-view'
import { TabWrapper } from "./style";
import PropTypes from "prop-types"
import classNames from 'classnames';
SectionTabs.PropTypes = {
    tabNames: Array
}
export default function SectionTabs(props) {
    const { tabNames, tabClick } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    // console.log(tabNames);
    const itemClickHandle = (index, item) => {
        setCurrentIndex(index);
        tabClick(index, item)
    }
    return (
        <TabWrapper>
            <ScrollView>
                {tabNames.map((item, index) => (
                    <div
                        key={index}
                        className={classNames("item", { active: index === currentIndex })}
                        onClick={e => itemClickHandle(index, item)}
                    >
                        {item}
                    </div>
                ))}
            </ScrollView>
        </TabWrapper>
    )
} 