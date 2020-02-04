import { createSlice, combineReducers } from "@reduxjs/toolkit";
export const heuristicOptions = [
  { label: "Manhattan", value: "manhattan" },
  { label: "Euclidean", value: "euclidean" },
  { label: "Octile", value: "octile" },
  { label: "Chebyshev", value: "chebyshev" }
];
const optionalParameters = {
  allowDiagonal: true,
  biDirectional: false,
  cornerCrossing: true
};
export const algorithms = [
  {
    name: "A*",
    id: "astar",
    options: optionalParameters,
    heuristic: heuristicOptions
  },
  {
    name: "IDA*",
    id: "idastar",
    heuristic: heuristicOptions,
    options: {
      ...optionalParameters,
      biDirectional: undefined,
      secondsLimit: 10,
      visualizeRecursion: true
    }
  },
  {
    name: "Breadth-First-Search",
    id: "bfs",
    options: optionalParameters
  },
  {
    name: "Best-First-Search",
    id: "bestfs",
    options: optionalParameters,
    heuristic: heuristicOptions
  },
  {
    name: "Dijkstra",
    id: "dijkstra",
    options: optionalParameters
  }
];

const AlgorithmAccordianSlice = createSlice({
  name: "algorithmAccordian",
  initialState: {
    selectedAlgorithm: null,
    algorithmOptions: algorithms.map(({ name, id }) => ({
      label: name,
      value: id
    }))
  },
  reducers: {
    selectAlgorithm: (state, action) => {
      const { name } = action.payload;
      if (state.selectedAlgorithm === name) {
        state.selectedAlgorithm = null;
      }
      state.selectedAlgorithm = name;
    }
  }
});

export const { selectAlgorithm } = AlgorithmAccordianSlice.actions;

const { reducer: AlgorithmAccordianReducer } = AlgorithmAccordianSlice;

const AlgorithmSlice = createSlice({
  name: "algorithm",
  initialState: {
    id: "",
    name: "",
    options: optionalParameters,
    heuristic: null
  },
  reducers: {
    changeOption: (state, action) => {
      const { name, value } = action.payload;
      if (state.options[name] !== value) {
        state.options[name] = value;
      }
    },
    changeHeuristic: (state, action) => {
      const { value } = action.payload;
      if (state.heuristic !== value) {
        state.heuristic = value;
      }
    }
  },
  extraReducers: {
    [AlgorithmAccordianSlice.state.selectAlgorithm]: (state, action) => {
      let algorithm = algorithms.find(({ id }) => id === action.payload);
      if (algorithm) {
        state = algorithm;
      }
    }
  }
});

export const {
  changeOption,
  changeHeuristic
} = AlgorithmSlice.actions;

const { reducer: AlgorithmReducer } = AlgorithmSlice;

export default combineReducers({
  algorithm: AlgorithmReducer,
  algorithmAccordian: AlgorithmAccordianReducer
});
