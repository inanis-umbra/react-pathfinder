import { createSlice, combineReducers } from "@reduxjs/toolkit";
export const heuristicOptions = [
  { label: "Manhattan", value: "manhattan" },
  { label: "Euclidean", value: "euclidean" },
  { label: "Octile", value: "octile" },
  { label: "Chebyshev", value: "chebyshev" }
];
const optionalParameters = [
  {
    label: "Allow Crossing Corners",
    value: "cornerCrossing"
  },
  {
    label: "Allow Diagonal Movement",
    value: "allowDiagonal"
  },
  {
    label: "Bi-Directional",
    value: "biDirectional"
  }
];
export const algorithms = [
  {
    name: "A*",
    id: "astar",
    options: optionalParameters,
    selectedOptions: [],
    heuristic: ''
  },
  {
    name: "IDA*",
    id: "idastar",
    heuristic: '',
    options: [
      ...optionalParameters.filter(option => option.value !== "biDirectional"),
      {
        label: "Visualize Recursion",
        value: "visualizeRecursion"
      }
    ],
    selectedOptions: []
  },
  {
    name: "Breadth-First-Search",
    id: "bfs",
    options: optionalParameters,
    selectedOptions: []
  },
  {
    name: "Best-First-Search",
    id: "bestfs",
    options: optionalParameters,
    selectedOptions: [],
    heuristic: ''
  },
  {
    name: "Dijkstra",
    id: "dijkstra",
    options: optionalParameters,
    selectedOptions: []
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
      state.selectedAlgorithm =
        state.selectedAlgorithm === action.payload ? null : action.payload;
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
    selectedOptions: [],
    heuristic: ''
  },
  reducers: {
    changeOption: (state, action) => {
      const { name } = action.payload;
      if (name) {
        let itemIndex = state.selectedOptions.indexOf(name);
        let currentSelected = state.selectedOptions;
        state.selectedOptions =
          itemIndex !== -1
            ? itemIndex > 0
              ? itemIndex !== currentSelected.length - 1
                ? currentSelected
                    .slice(0, itemIndex)
                    .concat(currentSelected.slice(itemIndex + 1))
                : currentSelected.slice(0, -1)
              : currentSelected.slice(1)
            : [name, ...currentSelected];
      }
    },
    changeHeuristic: (state, action) => {
      const value = action.payload;
      if (state.heuristic !== value) {
        state.heuristic = value;
      }
    }
  },
  extraReducers: {
    [AlgorithmAccordianSlice.actions.selectAlgorithm]: (state, action) => ({
      ...state,
      ...algorithms.find(algorithm => algorithm.id === action.payload)
    })
  }
});

export const { changeOption, changeHeuristic } = AlgorithmSlice.actions;

const { reducer: AlgorithmReducer } = AlgorithmSlice;

export default combineReducers({
  algorithm: AlgorithmReducer,
  algorithmAccordian: AlgorithmAccordianReducer
});
