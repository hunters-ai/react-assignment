import { combineReducers, createStore } from 'redux'

import { photosReducer } from './reducers/photos.reducer'

export const store = createStore(combineReducers({
  photosReducer
}))
