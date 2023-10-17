import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

// createSelector - позволяет переиспользовать другие селекторы
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
