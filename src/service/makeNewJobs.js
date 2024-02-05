export const makeNewJobs = (list) => {
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