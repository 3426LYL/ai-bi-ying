// left
import styled from 'styled-components'

export const LeftWrapper = styled.div`
    flex: 1;
    // color: var(--primaryColor); //variables.css
    color:${props => props.theme.color.primary};
    display: flex;
    align-items: center;
    .logo{
        cursor: pointer;
    }
`