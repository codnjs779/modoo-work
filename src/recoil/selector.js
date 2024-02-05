import { selectorFamily } from "recoil";
import { axiosData } from "../service/api/jobList";
import { jobsListState } from "./atoms";

export const fetchJobData = selectorFamily({
    key: 'fetchJobData',
    get: (params) => async () => {
        const res = await axiosData({ nm:params.nm, row:params.row });
        return res;
    },
  });

export const bookmarkFilterList = selectorFamily({
    key: 'filterBookMarkItem',
    get: (bookmarkId) => ({ get }) => {
      const jobsList = get(jobsListState);

    const filteredJobs = jobsList.processedJobs.filter((job) =>
      bookmarkId.includes(job.id)
    );
    
    return filteredJobs;
  },
  });