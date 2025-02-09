import React, { useRef, useState } from "react";
import { ItemWrapper } from "./style";
import { PropTypes } from "prop-types";
import { Carousel } from 'antd'
import { Rating } from "@mui/material";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

RoomItem.propTypes = {
    itemDate: PropTypes.object
}
export default function RoomItem(props) {
    const { itemData, itemWidth='25%',itemClick } = props;
    const sliderRef = useRef();
    const controlClickHandler = (isRight = true) => {
        isRight ? sliderRef.current.next() : sliderRef.current.prev();
    }
    const itemClickHandler = () => {
        if(itemClick) itemClick(itemData)
    }
    const pictureElement = (
        <div className='cover'><img src={itemData.picture_url} alt='' /></div>
    );

    const sliderElement = (
        <div className='slider'>
            <div className='control'>
                <div className='btn left' onClick={e => controlClickHandler(false)}>
                    <IconArrowLeft width="30" height="30" />
                </div>
                <div className='btn right' onClick={e => controlClickHandler(true)}>
                    <IconArrowRight width="30" height="30" />
                </div>
            </div>
            <Carousel dots ref={sliderRef}>
                {itemData?.picture_urls?.map((item) => (
                    <div className='cover' key={item}>
                        <img src={item} alt="" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
    return (
        <ItemWrapper
            verifyColor={itemData?.verify_info?.text_color || '#39576a'} //动态颜色
            itemWidth={itemWidth}  //动态宽度
            onClick={itemClickHandler}
        >
            <div className='inner'>
                {!itemData.picture_urls ? pictureElement : sliderElement}
                <div className='desc'>{itemData.verify_info.messages.join(' · ')}</div>
                <div className='name'>{itemData.name}</div>
                <div className='price'>¥{itemData.price}/晚</div>
                <div className='bottom'>
                    <span className='rate'>
                        <Rating
                            value={itemData.star_rating ?? 5}
                            precision={0.1}
                            readOnly
                            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
                        />
                    </span>
                    <span className='count'>{itemData.reviews_count}</span>
                    {
                        itemData.bottom_info && <span className='extra'>·{itemData?.bottom_info?.content}</span>
                    }
                </div>
            </div>
        </ItemWrapper>
    )
} 