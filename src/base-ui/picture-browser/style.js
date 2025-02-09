import styled from "styled-components";


export const BrowserWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    background-color: #333;
    .cover {
      height: 100vh;
      display: flex !important;
      justify-content: center ;
      align-items: center ;
    }
    .slider{
    position: relative;
    cursor: pointer;

    &:hover .control {
      display: flex;
    }
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      bottom:0;
      color: #fff;
       .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 83px;
      height: 100vh;
      background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
      &.right {
        background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
      }
    }
    }
  }
  .top{
    position: Fixed;
    top: 10px;
    right: 10px;
    z-index: 999;
    color: #fff;
    font-size: 40px;
  }
`