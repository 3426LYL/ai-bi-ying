import React, { memo, useCallback } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RoomItem from "@/components/room-item"
import { HouseWrapper } from './style'
import { changeDetailInfosAction } from '@/store/modules/detail'

const HouseList = memo(() => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const { houseList } = useSelector((state) => ({
    houseList: state.entire.houseList
  }))
  console.log(houseList,10);

  const itemClickHandler = useCallback((item) => {
    dispatch(changeDetailInfosAction(item))
    navigate('/datail')
  },[navigate])
  return (
    <HouseWrapper>
      {
        houseList.map(item => {
          return <RoomItem 
          itemData={item} 
          key={item.id} 
          itemWidth="20%"
          itemClick={itemClickHandler}
          />
        })
      }
    </HouseWrapper>
  )
})

export default HouseList