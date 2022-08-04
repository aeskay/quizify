import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
