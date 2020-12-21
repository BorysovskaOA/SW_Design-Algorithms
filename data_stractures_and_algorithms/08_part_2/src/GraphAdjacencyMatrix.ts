import { Edge } from './Edge';

export class GraphAdjacencyMatrix {
  private vertexes: string[];
  private adjacencyMatrix: number[][] = [];

  constructor(vertexes: string[], edges: Edge[]) {
    this.vertexes = vertexes;
    edges.forEach(this.addEdgeToAdjacencyMatrix);
  }

  private addEdgeToAdjacencyMatrix = (edge: Edge) => {
    const indexOfVertex1 = this.vertexes.indexOf(edge.vertex1);
    const indexOfVertex2 = this.vertexes.indexOf(edge.vertex2);

    if (indexOfVertex1 === -1 || indexOfVertex2 === -1) {
      throw new Error('Not correct vertex provided for edge');
    }

    this.setAdjacencyMatrixCell(indexOfVertex1, indexOfVertex2, edge.weight);
    this.setAdjacencyMatrixCell(indexOfVertex2, indexOfVertex1, edge.weight);
  }

  private setAdjacencyMatrixCell = (index1: number, index2: number, weight: number) => {
    this.initializeAdjacencyRow(index1);
    this.adjacencyMatrix[index1][index2] = weight;
  }

  private initializeAdjacencyRow = (index: number) => {
    if (!Array.isArray(this.adjacencyMatrix[index])) {
      // @ts-ignore
      this.adjacencyMatrix[index] = Array.from({ length: this.vertexes.length }, () => 0);
    }
  }

  public getMatrix = () => {
    return this.adjacencyMatrix;
  }
}