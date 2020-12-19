import { JobRunner } from './src/JobRunner';
import { Job } from './src/Job';

const generateJobs = (): Job[] => {
  const jobs = [];
  let i = 0;
  while (i < 1000) {
    const priority = Math.floor(Math.random() * 100);
    jobs.push({
      priority,
      execute: () => {
        console.log(priority);
      }
    });
    i++;
  }

  return jobs;
}

const generatedJobs = generateJobs();

new JobRunner(generatedJobs);


