import React, {useContext, useEffect} from 'react';
import ItemBox from './ItemBox';
import { ItemStyle } from './ItemStyle';
import { ThemeContext } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { bookmarkFilterList } from '../../recoil/selector';
import { bookMarkItem, moreHasState, moreLoadState, isActiveBookMarkState, jobsListState } from '../../recoil/atoms';
import useScrollJobList from '../../hooks/useScrollJobList';
import Button from '@mui/material/Button';

function ItemList() {
    const setScroll = useScrollJobList();
    const theme = useContext(ThemeContext);
    const row = 20;
    const [pageNm, setPageNm] = useRecoilState(moreLoadState);
    const [hasMore, setHasMore] = useRecoilState(moreHasState)
    const [jobList, setJobList] = useRecoilState(jobsListState);
    const [bookmarkId, setBookMarkId] = useRecoilState(bookMarkItem)
    const [isActiveBookMark, setIsActiveBookMark] = useRecoilState(isActiveBookMarkState)
    const bookMarkItemSelector = useRecoilValue(bookmarkFilterList(bookmarkId));
    
    useEffect(() => {
        setScroll({nm:pageNm, row:row})
    },[pageNm, row, setScroll ]);

      const moreLoadFunc = () => {
        
        const totalPages = Math.ceil(jobList.total / row);
        if (pageNm <= totalPages) {
          setScroll({nm:pageNm, row:row})

          setPageNm((prev) => prev + 1);
          const allDataLoaded = jobList.processedJobs.length >= jobList.total;
          setHasMore(!allDataLoaded);
        } else {
          setHasMore(false);
        }
      };
      

const bookmarkSave = (id) => {
    setBookMarkId((prev) => {
      return [...prev, id]; 
    });
  };

    return (
        isActiveBookMark ? 
        <ItemStyle.ItemListContainer theme={theme}>
           {bookMarkItemSelector.map((i) => (
                 <ItemBox
                   key={i.id}
                   props={{
                     item: i,
                     theme: theme,
                     func: bookmarkSave,
                   }}
                 />
               ))} 
         </ItemStyle.ItemListContainer>
        :  
       <ItemStyle.ItemListContainer theme={theme}>
       {jobList && jobList.processedJobs.map((i) => (
             <ItemBox
               key={i.id}
               props={{
                 item: i,
                 theme: theme,
                 func: bookmarkSave,
               }}
             />
           ))} 
            <Button  className='muibtn' onClick={() => moreLoadFunc()} variant="contained">더보기</Button>
           
     </ItemStyle.ItemListContainer> 
    )
   
    
}

export default ItemList;