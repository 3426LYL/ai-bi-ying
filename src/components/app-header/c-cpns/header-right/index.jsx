import React, { useState, useEffect } from "react";
import { RightWrapper } from "./style";
import IconMenu from "@/assets/svg/icon_menu";
import IconGlobal from "@/assets/svg/icon_global";
import IconAvatar from "@/assets/svg/icon_avatar";
export default function HeaderRight() {
    // 定义组件内的状态
    const [ShowPanel, setShowPanel] = useState(false);

    //副作用代码
    useEffect(() => {
        function windowHandleClick(){
            setShowPanel(false);
        }
        window.addEventListener("click",windowHandleClick,true);
        return () => {
            window.removeEventListener("click",windowHandleClick,true);
        }
    }, []);

    // 组件内部函数
    function profileClickHandle() {
        setShowPanel(true);
    }
    return (
        <RightWrapper>
            <div className="btns">
                <span className="btn">登录</span>
                <span className="btn">注册</span>
                <span className="btn"><IconMenu /></span>
            </div>
            <div className="profile" onClick={profileClickHandle}>
                <span><IconGlobal /></span>
                <span><IconAvatar /></span>
                {ShowPanel && (
                    <div className="panel">
                        <div className="top">
                            <div className="item register">注册</div>
                            <div className="item login">登录</div>
                        </div>
                        <div className="bottom">
                            <div className="item">出租房源</div>
                            <div className="item">开启体验</div>
                            <div className="item">帮助</div>
                        </div>
                    </div>
                )}

            </div>
        </RightWrapper>
    )
} 