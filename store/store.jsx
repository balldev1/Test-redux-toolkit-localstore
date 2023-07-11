import { configureStore } from '@reduxjs/toolkit'
import useSlice from './useSlice'


export const store = configureStore({
    reducer: {
        useStore: useSlice
    },
})