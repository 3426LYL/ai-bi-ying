import React, { memo, useEffect, useState,useRef } from 'react'
import { BrowserWrapper } from './style'
import { PropTypes } from 'prop-types'
import { Carousel } from 'antd'
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const PictureBrowser = memo((props) => {
  const { pictureUrls,onClose } = props
  const sliderRef = useRef();
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
   // 在需要关闭的时候调用onClose
   const handleTopClick = () => {
    if (onClose) {
      onClose();
    }
  };
  const controlClickHandler = (isRight = true) => {
      isRight ? sliderRef.current.next() : sliderRef.current.prev();
  }
  return (
    <BrowserWrapper>
      <div className="top" onClick={handleTopClick}>x</div>
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
          {pictureUrls?.map((item) => (
            <div className='cover' key={item}>
              <img src={item} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser