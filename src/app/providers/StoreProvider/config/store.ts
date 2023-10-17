import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

// Фукнция которая создает store, таким образом мы сможем переиспользовать этот участок кода
export function createReduxStore(initialState?: StateSchema) {
    // наш объект с Reducer
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        // отключаем для prod
        devTools: __IS_DEV__,
        // инициализация store для тестов или storybook
        preloadedState: initialState,
    });
}
