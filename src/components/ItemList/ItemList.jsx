import React, {useContext} from 'react';
import mockData from '../../mock.json';
import ItemBox from './ItemBox';
import useJobList from '../../hooks/useJobList';
import { ItemStyle } from './ItemStyle';
import { ThemeContext } from 'styled-components';


function ItemList() {
    const jobs = mockData.response.body.items.item;
    const theme = useContext(ThemeContext);
    const fetchJobs = useJobList(jobs);
    
    return (
        <ItemStyle.ItemListContainer theme={theme}>
            { fetchJobs && 
                fetchJobs.map((i) => 
                   <ItemBox key={i.companyName} props={{
                    item:i,
                    theme:theme,
                   }}/>
                   )
            }
        </ItemStyle.ItemListContainer>
    );
}

export default ItemList;