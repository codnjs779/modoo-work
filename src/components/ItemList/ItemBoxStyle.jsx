import styled from "styled-components"

const ItemBox = styled.div`
    border:1px solid ${(props) => (props.theme.colorPalette.lightGray)};
    border-radius: ${(props) => (props.theme.radius.sm)};
    display:grid;
    grid-template-columns: 0.5fr 2.3fr 1.2fr;
    padding:10px;
    cursor:pointer;

&:hover {
    transition: box-shadow 0.3s ease;
    transform: scale(1.02);
    box-shadow: 0 0 20px ${(props) => (props.theme.colorPalette.grayShdow)};;
}
`

const ItemBookMark = styled.div`
display:inline-flex;
justify-content:center;
align-items:center;
cursor:pointer;
`

const JobContentsEctBox = styled.div`
display: flex;
flex-direction: column;
font-size: ${(props) => (props.fontsetinfo.size)};
justify-content: space-between;
align-items: end;
height: 100%; 
`

const TxtBox = styled.div`
font-size: ${(props) => (props.fontsetinfo.size)};
padding:3px 0 3px 0;
`
const TxtManager = styled.div`
font-size: ${(props) => (props.fontsetinfo.size)};
color: ${(props) => (props.fontsetinfo.color)};
font-weight: ${(props) => (props.fontsetinfo.bold)};
;
`


export const ItemBoxStyle = {
    ItemBox,
    ItemBookMark,
    JobContentsEctBox,
    TxtManager,
    TxtBox,
}