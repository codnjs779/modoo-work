import styled from "styled-components"

const ItemListContainer = styled.div`
    max-width: ${(props) => props.theme.windowSize.large};
    margin: 5rem auto 10rem auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    position: relative;
    .muibtn {
        position: absolute;
        bottom: -90px;
        width: 100%;
        background-color:  ${(props) => props.theme.colorPalette.mainColor};
    }
    @media (max-width: ${(props) => props.theme.windowSize.base}) {
        grid-template-columns: repeat(1, 1fr);
      }
`

const ItemBigContainer = styled.div`
   overflow: auto; 
   height: 700px;

`



export const ItemStyle = {
    ItemListContainer,
    ItemBigContainer
}