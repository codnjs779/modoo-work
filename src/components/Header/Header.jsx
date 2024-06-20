import React, {useContext} from 'react';
import logo from "../../images/logo.png";
import {HeaderWrapperStyle} from './HeaderStyle'
import { ThemeContext } from 'styled-components';
import { isActiveBookMarkState, sizeUpTextState } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

const Header = () => {
    const theme = useContext(ThemeContext);
    const [isActiveBookMark, setIsActiveBookMark] = useRecoilState(isActiveBookMarkState)
    const [sizeUpText, setSizeUpText] = useRecoilState(sizeUpTextState)
    const filterBookedItem = () => {
        setIsActiveBookMark(!isActiveBookMark)
      }

    const headerMenuTab = [{link:"/", name:'홈'}, {link:"bookmark", name:'북마크'}, {link:"contact",name:'문의하기'}]
    const headerMenuSet = () => {
        const link = headerMenuTab.map((i) => {
            return (
                <Link to={i.link}>
                <div>{i.name}</div>
                </Link>
            )

        })

        return link
    }

   const scaleUptxt = () => {
        setSizeUpText(!sizeUpText)
   } 
    
    return (
        <HeaderWrapperStyle.HeaderContainer>
            <HeaderWrapperStyle.HeaderWrapper theme={theme}>
                <Link to={'/'}>
                <img src={logo} alt="logo"/>
                </Link>
                </HeaderWrapperStyle.HeaderWrapper>
                <HeaderWrapperStyle.MenuTabContainer>
                {headerMenuSet()}
                <div onClick={() => scaleUptxt()}>글자확대</div>
                </HeaderWrapperStyle.MenuTabContainer>

            </HeaderWrapperStyle.HeaderContainer>
    );
};

export default Header;