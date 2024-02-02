import styled from "styled-components";

const HeaderContainer  = styled.div`
align-items:center;
display: grid;
grid-template-columns: 2fr 3fr;
`
const HeaderWrapper = styled.div`
    img {
        width:160px;
    }
`

const MenuTabContainer = styled.div`
display: flex;
justify-content: space-evenly;
font-size: ${(props) => (props.theme.fontSize.md)};
font-weight: ${(props) => (props.theme.fontBold.mdBold)};
div{
    cursor
}
`

export const HeaderWrapperStyle = {
HeaderWrapper,
HeaderContainer,
MenuTabContainer
}
