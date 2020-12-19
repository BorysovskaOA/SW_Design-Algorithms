interface QueueItem<T> {
  priority: number,
  item: T
}

export class PriorityQueue<T> {
  private heap: QueueItem<T>[] = [];

  public insert(item: T, priority: number) {
    this.heap.push({
      priority,
      item
    });

    this.sortHeapAfterInsertion();
  }

  private sortHeapAfterInsertion() {
    let index = this.heap.length - 1;

    while(index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex].priority > this.heap[index].priority) {
        break;
      }

      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  public pop = (): T | null => {
    if (!this.heap.length) {
      return null;
    }

    this.swap(this.heap.length - 1, 0);
    const returningValue = this.heap.pop();

    this.restoreHeapStructure();

    // @ts-ignore
    return returningValue.item;
  }

  public getSize = () => {
    return this.heap.length;
  }

  private getParentIndex = (index: number) => {
    return Math.floor((index - 1) / 2);
  }

  private getLeftIndex = (index: number) => {
    return 2 * index + 1;
  }

  private getRightIndex = (index: number) => {
    return this.getLeftIndex(index) + 1;
  }

  private swap = (a: number, b: number) => {
    const temp = this.heap[a];

    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  private restoreHeapStructure = () => {
    let current = 0;

    while(this.heap[this.getLeftIndex(current)]) {
      const leftChild = this.getLeftIndex(current);
      const rightChild = this.getRightIndex(current);

      let biggerChild = this.getLeftIndex(current);

      if (this.heap[rightChild] && this.heap[rightChild].priority > this.heap[leftChild].priority) {
        biggerChild = rightChild;
      }

      if (this.heap[biggerChild].priority <= this.heap[current].priority) {
        break;
      }

      this.swap(biggerChild, current);
      current = biggerChild;
    }
  }
}