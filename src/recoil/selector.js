import { selector, selectorFamily } from "recoil";
import { axiosData } from "../apis/jobsData";
import { jobsListState } from "./atoms";

export const fetchJobData = selectorFamily({
    key: 'fetchJobData',
    get: (params) => async () => {
        // Fetch data based on the provided nm and row parameters
        const res = await axiosData({ nm:params.nm, row:params.row });
        return res;
    },
});
