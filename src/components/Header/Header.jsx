import React, {useContext} from 'react';
import logo from "../../images/logo.png";
import {HeaderWrapperStyle} from './HeaderStyle'
import { ThemeContext } from 'styled-components';
import { isActiveBookMarkState } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';
import Tooltip from '@mui/material/Tooltip';

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
                <div>
                <Tooltip title="chaenny.choi@gmail.com" placement="bottom-end">
                <div>문의</div>
                </Tooltip>
                </div>
     
                </HeaderWrapperStyle.MenuTabContainer>

            </HeaderWrapperStyle.HeaderContainer>
    );
};

export default Header;