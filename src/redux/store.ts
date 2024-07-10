import { configureStore } from '@reduxjs/toolkit';
import colorModeReducer from '@/redux/reducers/colorMode/colorModeSlice.ts';

const store = configureStore({
    reducer: {
        colorMode: colorModeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
