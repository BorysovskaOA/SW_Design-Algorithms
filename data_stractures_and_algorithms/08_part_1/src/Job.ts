export interface Job {
  priority: number;
  execute: () => void;
}