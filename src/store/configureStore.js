import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import logger from 'redux-logger';

import preloadedState from './preloadedState';
import { loadState, saveState } from './localStorage';

import articlesReducer from './articlesSlice';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: persistedState || preloadedState,
});

store.subscribe(() => {
  saveState({
    articles: store.getState().articles,
  });
}, 1000);

export default store;
