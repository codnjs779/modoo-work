import { BookmarkBorder as BookmarkBorderIcon, Bookmark as BookmarkIcon } from '@mui/icons-material';


const windowSize = {
    small: '600px',
    base: '768px',
    large: '1024px'
};

const fontSize = {
  xs: '0.65rem',
  sm: '0.85rem',
  base: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xxlg:'2.6rem',
  mglg: '2.9rem',
};

const colorPalette = {
    lightGray:"#ccc",
    darkGray:"#737373",
    mainColor:"#488aa2",
    baseColor:"black",
    grayShdow:"rgba(0, 0, 0, 0.1)",
    lightMain:"#AAD7D9",
    fontDarkGray:'#3E3E3E',
    white:'white',
}

const radius = {
    sm: '6px',
    base:'10px',
    md:'15px',
    lg:'25px'
}

const fontBold = {
    thin:'300',
    base:'500',
    mdBold:'600',
    lgBold:'700',
}

// const iconType = {
// baseBookmark: BookmarkBorderIcon,
// checkedBookmark:BookmarkIcon,
// };

// const iconSize = {
//     lg: {
//         width: '25px',
//         height:'25px',
//     },
//     md: {
//         width:'20px',
//         height:'20px',
//     },
//     sm: {
//         width: '15px',
//         height: '15px',
//     },
// };

// const baseStyle = {
//     display:'inline-flex',
//     justifyContent:'center',
//     alignItems:'center',
// };

export const theme = {
    windowSize,
    fontSize,
    colorPalette,
    radius,
    fontBold,
}

