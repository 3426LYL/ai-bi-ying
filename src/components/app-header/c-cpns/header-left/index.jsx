import React,{useState} from "react";
import {LeftWrapper} from "./style";
import IconLogo from "@/assets/svg/icon_logo";
import {useNavigate} from "react-router-dom";
export default function HeaderLeft(){
    const navigate=useNavigate()
    const logoClickHandle=()=>{
        console.log(1111);
        
        navigate('/home')
    }
    return(
        <LeftWrapper>
            <div onClick={logoClickHandle}>
            <IconLogo className='logo' />
            </div>
        </LeftWrapper> 
    )
} 