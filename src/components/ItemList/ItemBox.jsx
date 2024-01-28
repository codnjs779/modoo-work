import React from 'react';
import { BookmarkBorder as BookmarkBorderIcon, Bookmark as BookmarkIcon } from '@mui/icons-material';
import {ItemBoxStyle} from './ItemBoxStyle';

function ItemBox({props}) {
    const {item, theme} = props;
    const physicalEnv = item.physicalEnv;

    return (
        <ItemBoxStyle.ItemBox>
          <ItemBoxStyle.ItemBookMark>
            <BookmarkBorderIcon fontSize='large'/>
            {/* <BookmarkIcon/> */}
          </ItemBoxStyle.ItemBookMark>

          <div>
          <ItemBoxStyle.TxtManager 
          fontsetinfo={{ size: theme.fontSize.md, 
                        color:theme.colorPalette.baseColor,
                        bold:theme.fontBold.lgBold }}>
                {item.companyName}
          </ItemBoxStyle.TxtManager>
            <div>{item.jobName}</div>

            <ItemBoxStyle.TxtBox fontsetinfo={{size:theme.fontSize.sm}}>
            <div>{item.companyAddr}</div>
            <div>{item.requestEdu}</div>
            </ItemBoxStyle.TxtBox>
            <ItemBoxStyle.TxtManager
              fontsetinfo={{ size: theme.fontSize.sm, 
                color:theme.colorPalette.mainColor,
                bold:theme.fontBold.lgBold }}
            >
            <span>{item.salary}</span> <span> | {item.salaryType}</span>
            </ItemBoxStyle.TxtManager>
            
            
            <ItemBoxStyle.TxtBox fontsetinfo={{size:theme.fontSize.sm}}>
            <div>신체능력</div>
            <PhysicalEnvChips phyEnv={physicalEnv}/>
            </ItemBoxStyle.TxtBox>
          </div>
          <div>

            <ItemBoxStyle.JobContentsEctBox fontsetinfo={{size:theme.fontSize.sm}}>
            <ItemBoxStyle.TxtManager 
                    fontsetinfo={{ size: 'inherit', 
                        color:theme.colorPalette.baseColor,
                        bold:theme.fontBold.mdBold }}
                        >📞 {item.contactNum}</ItemBoxStyle.TxtManager>
            <ItemBoxStyle.TxtManager
                fontsetinfo={{ size: theme.fontSize.xs, 
                    color:theme.colorPalette.darkGray,
                    bold:theme.fontBold.base}}>{item.recruitPeriod}</ItemBoxStyle.TxtManager>
            </ItemBoxStyle.JobContentsEctBox>
          </div>
        </ItemBoxStyle.ItemBox>

          
    );
}
export default ItemBox;

export function PhysicalEnvChips({phyEnv}){
    const envEntries = Object.entries(phyEnv);
    return (
        <div>
            {envEntries.map(([key, value]) => (
                <>
                 <span key={key}>
                    {value?.color === 1 ? "서있기:" : null}
                    {value?.title}
                    </span>
                </>
               
            ))}
        </div>
    );
}