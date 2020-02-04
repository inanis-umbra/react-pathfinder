import {createSelector} from '@reduxjs/toolkit';
import { algorithms } from './_redux';

const getAlgorithmAccordian = state => state.algorithmAccordianModule.algorithmAccordian;
const getAlgorithm = state => state.algorithmAccordianModule.algorithm;

export const getAlgorithmAccordians = createSelector([getAlgorithmAccordian, getAlgorithm], (accordian, algorithm) => {
    return {
        accordians:[...accordian.algorithmOptions],
        selected: accordian.selectedAlgorithm ? algorithms : null
    }
})