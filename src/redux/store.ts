import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { photosReducer } from './reducers/photos.reducer'
const middlewares = [thunk]

export const store = createStore(combineReducers({
  photosReducer
}), composeWithDevTools(
  applyMiddleware(...middlewares))
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
