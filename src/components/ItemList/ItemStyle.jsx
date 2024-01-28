import styled from "styled-components";

const ItemListContainer = styled.div`
    max-width:${(props) => (props.theme.windowSize.large)};
    display:gird;
    margin:2rem auto;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:1rem;
    @media (max-width: ${(props) => props.theme.windowSize.base}) {
        grid-template-columns: repeat(1, 1fr);
      }
`



export const ItemStyle = {
    ItemListContainer,
}