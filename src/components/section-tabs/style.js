import styled from 'styled-components'
export const TabWrapper = styled.div`
    .item {
        box-sizing: border-box;
        flex-basis: 120px;
        flex-shrink: 0;
        padding: 14px 16px;
        margin-right: 16px;
        border-radius: 3px;
        font-size: 17px;
        text-align: center;
        border: 0.5px solid #D8DEDE;
        white-space: nowrap;
        cursor: pointer;
        ${props => props.theme.mixins.boxShadow};
        &:last-child {
            margin-right: 0;
        }
        &:active, &.active { // 添加 &.active 来设置选中状态的样式
            color: #fff;
            background-color: ${props => props.theme.color.secondary};
        }
    }
`