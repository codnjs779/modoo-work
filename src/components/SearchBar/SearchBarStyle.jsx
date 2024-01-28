import styled from "styled-components";

const SearchContainer = styled.div`
display:flex;
justify-content:center;
margin-top:3rem;
`

const InputBox = styled.input`
font-size:${(props) => (props.theme.fontSize.md)};
padding: 8px;
height:3rem;
border: 1px solid ${(props) => (props.theme.colorPalette.lightGray)};
border-radius: ${(props) => (props.theme.radius.sm)};
${({ type }) =>
    type === "button" ?
    `
        cursor:pointer;
        margin-left:0.8rem;
        
    ` :
    `
    width:80%;
    max-width:650px;
    `

}
`

export const searchBarStyle = {
    SearchContainer,
    InputBox
}
