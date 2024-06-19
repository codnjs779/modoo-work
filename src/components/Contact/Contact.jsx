import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import ani from '../../images/ani.gif'
import SimpleAlert from '../../default/Alert';
import link from "../../images/link.png"
const Contact = () => {
    const theme = useContext(ThemeContext)
    const copylink = () => {
        
    }
     return (
        <ContactStyle theme={theme}>
            <img src={ani} alt='emailimg'/>
            <TextStyle options={{size:theme.fontSize.xxlg, weight:600, color:theme.colorPalette.fontDarkGray}}>문의사항</TextStyle>
            <div className='emailbox'>
            <TextStyle options={{size:theme.fontSize.mg, weight:600, color:theme.colorPalette.darkGray}}>chaenny.choi@gmail.com</TextStyle>
            <div onClick={() => copylink()}><img src={link} alt="링크"/></div>
            </div>
            <p>궁금하신 사항이 있으시면 메일주소로 연락 부탁드립니다.</p>
            <SimpleAlert props={{status:"success", text:"복사완료!"}}/>
        </ContactStyle>
    );
};

export default Contact;

const ContactStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-top: 100px;
.emailbox{
    display: flex;
    align-items: center;
    text-align: center;
    align-content: center;
    margin-top: 20px;
    img {
        margin-left: 10px;
        cursor: pointer;
    }
}

p {
    color: ${(props) => (props.theme.colorPalette.darkGray)};
}
`
const TextStyle = styled.div`
font-size: ${(props) => (props.options.size)};
font-weight: ${(props) => (props.options.weight)};
text-align: center;

color: ${(props) => (props.options.color)};

`
