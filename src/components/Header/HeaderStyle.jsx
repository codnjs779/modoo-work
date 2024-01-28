import styled from "styled-components";

export const HeaderWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
    img {
        width:160px;
    }
.contactTooltip {
    cursor:pointer;
    border:0.9px solid black;
    border-radius:${(props) => (props.theme.radius.sm)};
    padding:3px;
}
`;
