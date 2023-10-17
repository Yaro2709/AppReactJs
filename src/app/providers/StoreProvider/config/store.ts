import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

// Фукнция которая создает store, таким образом мы сможем переиспользовать этот участок кода
export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        // отключаем для prod
        devTools: __IS_DEV__,
        // инициализация store для тестов или storybook
        preloadedState: initialState,
    });
}
