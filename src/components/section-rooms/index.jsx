import React, { useState } from "react";
import { RoomsWrapper } from "./style";
import RoomItem from "@/components/room-item/index";

export default function SectionRooms(props) {
    const { roomList,itemWidth } = props;
    return (
        <RoomsWrapper >
            {roomList?.slice(0, 8).map(item => {
                return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />
            })}
        </RoomsWrapper>
    )
} 