import { atom } from "recoil"
import { axiosData } from "../apis/jobsData"

export const jobsListState = atom({
    key:'jobListState',
    default: {
        processedJobs: [],
      },
})

export const infiniteScrollState = atom({
    key:'infiniteScroll',
    default:1,
})

export const isActiveBookMarkState = atom({
    key:'onlyBookMarkItem',
    default:false,
})

export const bookMarkItem  = atom({
    key:'bookMark',
   default:[],
})


