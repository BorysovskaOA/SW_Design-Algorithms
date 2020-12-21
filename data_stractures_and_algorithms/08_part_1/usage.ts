import { JobRunner } from './src/JobRunner';

const jobRunner = new JobRunner([
  { priority: 6, execute: () => { console.log(6) } },
  { priority: 5, execute: () => { console.log(5) } },
  { priority: 3, execute: () => { console.log(3) } },
  { priority: 3, execute: () => { console.log(3) } },
  { priority: 1, execute: () => { console.log(1) } },
  { priority: 8, execute: () => { console.log(8) } },
  { priority: 7, execute: () => { console.log(7) } },
  { priority: 2, execute: () => { console.log(2) } },
  { priority: 4, execute: () => { console.log(4) } },
  { priority: 4, execute: () => {
    console.log(4);
    jobRunner.add({
      priority: 5,
      execute: () => {console.log('added From 4, priority: 5')}
      });
    } },
]);
