import { Edge } from './src/Edge';
import { WeightedGraph } from './src/WeightedGraph';

const vertexes: string[] = ['1', '2', '3', '4', '5', '6'];
const edges: Edge[] = [
  { vertex1: '1', vertex2: '6', weight: 14 },
  { vertex1: '1', vertex2: '3', weight: 9 },
  { vertex1: '1', vertex2: '2', weight: 7 },
  { vertex1: '6', vertex2: '5', weight: 9 },
  { vertex1: '6', vertex2: '3', weight: 2 },
  { vertex1: '3', vertex2: '2', weight: 10 },
  { vertex1: '3', vertex2: '4', weight: 11 },
  { vertex1: '2', vertex2: '4', weight: 15 },
  { vertex1: '5', vertex2: '4', weight: 6 },
];

const graph = new WeightedGraph(vertexes, edges);

console.log(graph.getAdjacencyMatrix());

console.log(graph.closestWayToVertexes('1'));