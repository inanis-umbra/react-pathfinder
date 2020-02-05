import {createSelector} from '@reduxjs/toolkit';

const getAlgorithmAccordian = state => state.algorithmAccordianModule.algorithmAccordian;
const getAlgorithm = state => state.algorithmAccordianModule.algorithm;

export const getAlgorithmAccordians = createSelector(getAlgorithmAccordian, getAlgorithm, (accordian, algorithm) => {
    return {
        accordians:[...accordian.algorithmOptions],
        selected: accordian.selectedAlgorithm ? algorithm : null
    }
});

export const getAccordianOptions = createSelector(getAlgorithmAccordians, ({selected}) => {
    if (selected && selected.options) {
        return {
            title: `${selected.name} Options`,
            options: selected.options,
            selectedOptions: selected.selectedOptions
        }
    }
    return {
        title: null,
        options: null,
        selectedOptions: null
    }
})

export const getAccordianHeuristic = createSelector(getAlgorithmAccordians, ({selected}) => {
    if (selected) {
        return {
            title: `Select Heuristic Variant`,
            heuristic: selected.heuristic
        }
    }
    return {
        title: null,
        heuristic: null
    }
})
