import styled from "styled-components"
export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-input{
         display: flex;
        justify-content: space-between;
        align-items: center;
        width: 270px;
        height: 46px;
        box-sizing: border-box;
        padding: 0 8px;
        border: 1px solid #ddd;
        border-radius: 24px;
        cursor: pointer;
        ${props => props.theme.mixins.boxShadow};
    }
    .iconbox{
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: ${props => props.theme.color.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        }
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: #fff !important;
        background-color: ${props => props.theme.text.secondaryColor};
    }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    /* transition: all 250ms linear; */

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`

