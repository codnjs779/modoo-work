import React from 'react';
import styled from 'styled-components';
import useRecoilState from "recoil";
import { detailJobState } from '../../recoil/atoms';

const DetailPage = () => {
    const [selectedItem, setSelectedItem] = useRecoilState(detailJobState)
    console.log('this is detailpage atom state', selectedItem)
    return (
        <DetailPageStyle>
            i'm detail page 
        </DetailPageStyle>
    );
};

export default DetailPage;

const DetailPageStyle = styled.div`
/* margin-top: 800px; */
`