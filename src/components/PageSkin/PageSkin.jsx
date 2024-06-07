import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import banner from '../../images/banner.png'
const PageSkin = () => {
    const theme= useContext(ThemeContext)
    return (
        <PageSkinContainer theme={theme}>
            <ImgBox><img src={banner} alt="banner img"></img></ImgBox>
            <MainTitle options={{margin:"30px", theme:theme}}>Together Possible</MainTitle>
            <SubTitle options={{margin:"35px"}}>가능성을 현실로, 함께하는 일자리</SubTitle>
        </PageSkinContainer>
    );
};

export default PageSkin;


const PageSkinContainer = styled.div`
width: 100vw;
height: 600px;
color:${(props) => props.theme.colorPalette.fontDarkGray};
`

const ImgBox = styled.div`
    width: 100vw;
    /* height: 600px; */
    img{
        width: 100vw;
        max-height: 600px;
    background-position: center;

    }
`
const MainTitle = styled.div`
font-size:  ${(props) => props.theme.fontSize.mglg};
font-weight: bold;
margin-left: ${(props) => props.options.margin};
margin-bottom: 1rem;
@media (max-width: ${(props) => props.theme.windowSize.base}) {
    font-size:  ${(props) => props.theme.fontSize.lg};
      }
`

const SubTitle = styled.div`
font-size:  ${(props) => props.theme.fontSize.md};
margin-left: ${(props) => props.options.margin};
@media (max-width: ${(props) => props.theme.windowSize.base}) {
    font-size:  ${(props) => props.theme.fontSize.sm};
    white-space: pre-wrap;
      }
`