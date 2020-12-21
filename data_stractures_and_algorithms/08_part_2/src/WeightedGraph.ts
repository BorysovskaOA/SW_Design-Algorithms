import { GraphAdjacencyMatrix } from './GraphAdjacencyMatrix';
import { Edge } from './Edge';

export class WeightedGraph {
  private adjacencyMatrix: GraphAdjacencyMatrix;
  private vertexes: string[];

  constructor(vertexes: string[], edges: Edge[]) {
    this.vertexes = vertexes;
    this.adjacencyMatrix = new GraphAdjacencyMatrix(vertexes, edges);
  }

  public getAdjacencyMatrix = () => {
    return this.adjacencyMatrix.getMatrix();
  }

  public closestWayToVertexes = (vertex: string) => {
    const headIndex = this.vertexes.indexOf(vertex);

    if (headIndex === -1) {
      throw new Error('Invalid vertex to start');
    }

    const closestWays = this.getDefaultClosestWays(headIndex);

    this.updateClosestWays(closestWays, headIndex);

    return closestWays;
  }

  private getDefaultClosestWays = (head: number) => {
    // @ts-ignore
    return Array.from(
      { length: this.vertexes.length },
      (el, index) => index === head ? 0 : Number.MAX_VALUE
    );
  }

  private updateClosestWays = (closestWays: number[], headIndex: number) => {
    const watchedIndexes: number[] = [];
    const indexesToWatch: number[] = [headIndex];

    while (watchedIndexes.length <= this.vertexes.length || !indexesToWatch.length) {
      const checkingVertexIndex = indexesToWatch.shift();

      if (checkingVertexIndex === undefined) {
        break;
      }

      this.checkVertexAndUpdateClosestWays(closestWays, checkingVertexIndex, watchedIndexes, indexesToWatch);

      watchedIndexes.push(checkingVertexIndex);
    }
  }

  private checkVertexAndUpdateClosestWays = (closestWays: number[], vertexIndex: number, watchedIndexes: number[], indexesToWatch: number[]) => {
    const matrix = this.getAdjacencyMatrix();

    matrix[vertexIndex].forEach((weight, index) => {
      // @ts-ignore
      if (weight === 0 || watchedIndexes.includes(index)) {
        return;
      }

      closestWays[index] = Math.min(closestWays[vertexIndex] + weight, closestWays[index]);
      indexesToWatch.push(index);
    });
  }
}