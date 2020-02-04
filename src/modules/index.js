import {AlgorithmAccordianReducer} from './AlgorithmAccordian';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    algorithmAccordianModule: AlgorithmAccordianReducer
})