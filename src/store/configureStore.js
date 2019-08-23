import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import logger from 'redux-logger';

import { loadState, saveState } from './localStorage';

import articleSlice from './slices/articleSlice';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    article: articleSlice,
  },
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    articles: store.getState().articles,
  });
}, 1000);

export default store;
