import React, {useContext} from 'react';
import logo from "../../images/logo.png";
import {HeaderWrapperStyle} from './HeaderStyle'
import { ThemeContext } from 'styled-components';
import { isActiveBookMarkState } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';

const Header = () => {
    const theme = useContext(ThemeContext);
    const [isActiveBookMark, setIsActiveBookMark] = useRecoilState(isActiveBookMarkState)

    const filterBookedItem = () => {
        setIsActiveBookMark(!isActiveBookMark)
      }
    
    return (
        <HeaderWrapperStyle.HeaderContainer>
            <HeaderWrapperStyle.HeaderWrapper theme={theme}>
                    <img src={logo} alt="logo" />
                </HeaderWrapperStyle.HeaderWrapper>
                <HeaderWrapperStyle.MenuTabContainer>
                <div onClick={filterBookedItem}> 북마크 </div>
                <div>문의 </div>
                </HeaderWrapperStyle.MenuTabContainer>

            </HeaderWrapperStyle.HeaderContainer>
    );
};

export default Header;