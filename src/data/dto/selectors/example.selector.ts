import { createSelector } from "./createSelector";
export const exampleSelector = createSelector(
  (state: { testReducer: { name: string } }) => state.testReducer,
  (testReducer: any) => testReducer
);
