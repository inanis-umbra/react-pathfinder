import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAlgorithm, changeHeuristic, changeOption } from "./_redux";
import { getAlgorithmAccordians } from "./_selectors";

export const useAccordians = () => {
  const accordianState = useSelector(getAlgorithmAccordians);
  const dispatch = useDispatch();

  return {
    accordianState,
    handleSelectAlgorithm: useCallback(
      event => dispatch(selectAlgorithm(event.target.name)),
      [dispatch]
    ),
    handleChangeOption: useCallback(
      event =>
        dispatch(
          changeOption({ name: event.target.name, value: event.target.value })
        ),
      [dispatch]
    ),
    handleChangeHeuristic: useCallback(
        event =>
          dispatch(
            changeHeuristic({ value: event.target.value })
          ),
        [dispatch]
      )
  };
};
