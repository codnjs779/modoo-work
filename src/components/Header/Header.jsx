import React, {useContext} from 'react';
import logo from "../../images/logo.png";
import { HeaderWrapper } from './HeaderStyle';
import Tooltip from '@mui/material/Tooltip';
import { ThemeContext } from 'styled-components';

const Header = () => {
    const contactEmail = "chaenny.choi@gmail.com"
    const theme = useContext(ThemeContext);

    return (
            <HeaderWrapper theme={theme}>
                <div>
                    <img src={logo} alt="logo" />
                </div>

                <div className='contactTooltip'>
                <Tooltip title={contactEmail} placement="top-start">
                    문의
                </Tooltip>
                </div>
          
               
            </HeaderWrapper>
    );
};

export default Header;