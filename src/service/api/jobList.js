import axios from 'axios';
import { makeNewJobs } from '../makeNewJobs';

const url = process.env.REACT_APP_BASE_URL;
const serviceKey = process.env.REACT_APP_SERVICE_KEY;

export const axiosData = async ({ nm, row }) => {
  try {
        const res = await axios.get(url, {
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
        const processedData = makeNewJobs(res.data.response.body);
        return processedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

