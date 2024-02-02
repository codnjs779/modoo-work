import React, {useContext, useState, useRef, Suspense, startTransition} from 'react';
import ItemBox from './ItemBox';
import { ItemStyle } from './ItemStyle';
import { ThemeContext } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import InfiniteScroll from 'react-infinite-scroller';
import { bookmarkFilterList, fetchJobData } from '../../recoil/selector';
import { bookMarkItem, infiniteScrollState, isActiveBookMarkState, jobsListState } from '../../recoil/atoms';

function ItemList() {
    const theme = useContext(ThemeContext);
    const row = 20;
    const [pageNm, setPageNm] = useRecoilState(infiniteScrollState);
    const [hasMore, setHasMore] = useState(true)
    const [jobList, setJobList] = useRecoilState(jobsListState);
    const {processedJobs,totalLength} = useRecoilValue(fetchJobData({nm:pageNm, row}));
    const scrollParentRef = useRef(null);
    const [bookmarkId, setBookMarkId] = useRecoilState(bookMarkItem)
    const [isActiveBookMark, setIsActiveBookMark] = useRecoilState(isActiveBookMarkState)
    const bookMarkItemSelector = useRecoilValue(bookmarkFilterList(bookmarkId));

const scrollLoadFunc = () => {
  const newPageNm = pageNm + 1;
  
  const currentPage = Math.ceil(jobList.processedJobs.length / row);
  const totalPages = Math.ceil(totalLength / row);
  if (newPageNm <= totalPages) {
    const arr = jobList.processedJobs;
    const updatedProcessedJobs = arr.concat(processedJobs);
    setJobList((prev) => ({
      ...prev,
      processedJobs: updatedProcessedJobs,
    }));
    setPageNm(newPageNm);
    const allDataLoaded = updatedProcessedJobs.length >= totalLength;
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
        <ItemStyle.ItemBigContainer ref={scrollParentRef}>
          {
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
             <InfiniteScroll
             pageStart={1}
             loadMore={scrollLoadFunc}
             hasMore={hasMore}
             useWindow={false}
             getScrollParent={() => scrollParentRef.current}
           >        
           
             <ItemStyle.ItemListContainer theme={theme}>
            {jobList.processedJobs.map((i) => (
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
          </InfiniteScroll>
          }
      </ItemStyle.ItemBigContainer>
    );
}

export default ItemList;