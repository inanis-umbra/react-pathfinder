import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAlgorithm, changeHeuristic, changeOption, heuristicOptions } from "./_redux";
import { getAlgorithmAccordians, getAccordianOptions, getAccordianHeuristic } from "./_selectors";

export const useAccordians = () => {
  const accordianState = useSelector(getAlgorithmAccordians);
  const dispatch = useDispatch();

  return {
    ...accordianState,
    handleSelectAlgorithm: useCallback(
      name => () => dispatch(selectAlgorithm(name)),
      [dispatch]
    )
  };
};

export const useAccordianOptions = () => {
  const accordianOptions = useSelector(getAccordianOptions);
  const dispatch = useDispatch();
  return {
    ...accordianOptions,
    handleChangeOption: useCallback(
      event =>
        dispatch(
          changeOption({ name: event.target.name })
        ),
      [dispatch]
    ),
  }
}

export const useAccordianHeuristic = () => {
  const accordianHeuristic = useSelector(getAccordianHeuristic);
  const dispatch = useDispatch();
  return {
    ...accordianHeuristic,
    heuristicOptions,
    handleChangeHeuristic: useCallback(
      event =>
        dispatch(
          changeHeuristic(event.target.value)
        ),
      [dispatch]
    )
  }
}


