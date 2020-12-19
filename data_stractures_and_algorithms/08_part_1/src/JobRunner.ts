import { Job } from './Job';
import { PriorityQueue } from './PriorityQueue';

export class JobRunner {
  private queue: PriorityQueue<() => void>;

  constructor(jobs: Job[]) {
    this.queue = new PriorityQueue();

    jobs.forEach((job: Job) => {
      this.queue.insert(job.execute, job.priority);
    });

    this.runJobsCircularly();
  }

  public add = (job: Job) => {
    this.queue.insert(job.execute, job.priority)
  }

  private runNextJob = () => {
    const job = this.queue.pop();

    if (!job) {
      return;
    }

    job();
  }

  private runJobsCircularly = () => {
    setTimeout(() => {
      this.runNextJob();
      this.runJobsCircularly()
    }, 0);
  }
}