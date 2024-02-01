import axios from 'axios';
import useJobList from '../hooks/useJobList';

const BASE_URL = 'http://apis.data.go.kr/B552583/job/job_list_env';
const serviceKey = process.env.REACT_APP_SERVICE_KEY;


export const axiosData = async ({ nm, row }) => {
  try {
        const res = await axios.get(BASE_URL, {
            params: {
                serviceKey: serviceKey,
                pageNo: nm,
                numOfRows: row,
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        // Assuming the response structure is res.data.response.body.items.item
        const processedData = makeNewJobs(res.data.response.body);
        return processedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


const makeNewJobs = (list) => {
  if (list) {
    const totalLength = list.totalCount;
    const processedJobs = list.items.item.map((job) => {
      return {
        id: job.rno,
        companyName: job.busplaName,
        contactNum: job.cntctNo,
        companyAddr: job.compAddr,
        empType: job.empType,
        jobName: job.jobNm,
        recruitPeriod: job.termDate,
        salaryType: job.salaryType,
        salary: job.salary,
        requestEdu: job.requestEdu,
        physicalEnv: {
          stand: { type: 1, title: job.envStndWalk },
          hands: { type: 2, title: job.envBothHands },
          detailHands: { type: 3, title: job.envHandWork },
          power: { type: 4, title: job.envLiftPower },
          eyes: { type: 5, title: job.envEyesight },
          communication: { type: 6, title: job.envLstnTalk },
        },
      };
    });

    return {processedJobs,totalLength};
  }
  return [];
};
