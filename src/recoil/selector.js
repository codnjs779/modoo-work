import { selector, selectorFamily } from "recoil";
import { axiosData } from "../apis/jobsData";


export const fetchJobData = selectorFamily({
    key:'fetchJobData',
    get: (params) => 
    async () => {
        return await axiosData(params)
    }
})