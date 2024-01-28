import React, { useEffect, useState } from 'react';
import mockData from '../mock.json';

function useJobList(jobs) {
    const oldJobs = jobs; // api 결과
    const [newJobs, setNewJobs] = useState(null);

    const makeNewJobs = () => {
        if(oldJobs) {
            const processedJobs = oldJobs.map((job) => {
                return {
                    companyName:job.busplaName,
                    contactNum:job.cntctNo,
                    companyAddr:job.compAddr,
                    empType:job.empType,
                    jobName:job.jobNm,
                    recruitPeriod:job.termDate,
                    salaryType:job.salaryType,
                    salary:job.salary,
                    requestEdu:job.requestEdu,
                    physicalEnv:{
                        stand:{color:1, title:job.envStndWalk},
                        hands:{color:2,title:job.envBothHands},
                        detailHands: {color:3,title:job.envHandWork},
                        power:{color:4,title:job.envLiftPower},
                        eyes:{color:5,title:job.envEyesight},
                        communication:{color:6,title:job.envLstnTalk},
                    },

                }
            })
            setNewJobs(processedJobs);
        }
    }
    useEffect(() => {
            makeNewJobs()
    }, [])


    return newJobs;
}

export default useJobList;