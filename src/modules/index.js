import {AlgorithmAccordianReducer} from './AlgorithmAccordian';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    algorithmAccordianModule: AlgorithmAccordianReducer
})
export { Layout as LayoutModule } from './Layout';
export {AlgorithmAccordian as AlgorithmAccordianModule} from './AlgorithmAccordian';
