import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import banner from '../../images/banner.png'
const PageSkin = () => {
    const theme= useContext(ThemeContext)

    return (
        <PageSkinContainer theme={theme}>
            <MainTitle>모든 능력을 존중합니다</MainTitle>
            <SubTitle>다양한 능력이 만나 협력과 성공이 피어날 곳, 함께하세요 </SubTitle>
        </PageSkinContainer>
    );
};

export default PageSkin;


const PageSkinContainer = styled.div`
display: flex;
position: relative;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${(props) => props.theme.colorPalette.lightMain};
height: 400px;
background-position: center center;
background-repeat: no-repeat; 
width: 100%;
background-image:url(${banner});
background-size: cover;
margin-top: 3rem;
color:${(props) => props.theme.colorPalette.fontDarkGray};

`
const MainTitle = styled.div`
font-size:  ${(props) => props.theme.fontSize.xxlg};
font-weight: bold;
margin-bottom: 1.3rem;
@media (max-width: ${(props) => props.theme.windowSize.base}) {
    font-size:  ${(props) => props.theme.fontSize.lg};
      }
`

const SubTitle = styled.div`
font-size:  ${(props) => props.theme.fontSize.md};
@media (max-width: ${(props) => props.theme.windowSize.base}) {
    font-size:  ${(props) => props.theme.fontSize.sm};
    white-space: pre-wrap;
      }
`