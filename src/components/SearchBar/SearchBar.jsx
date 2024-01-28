import React, {useContext} from 'react';
import { ThemeContext } from 'styled-components';
import {searchBarStyle} from './SearchBarStyle';

function SearchBar() {
    const theme = useContext(ThemeContext);
    return (
        <searchBarStyle.SearchContainer>
            <searchBarStyle.InputBox type="search" theme={theme} />
            <searchBarStyle.InputBox type="button" value={"검색"} fontSize={theme}></searchBarStyle.InputBox>
        </searchBarStyle.SearchContainer>
    );
}

export default SearchBar;