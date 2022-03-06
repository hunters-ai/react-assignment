import { State } from '../reducers/photos.reducer'

export const photosSelector = (state: {
  photosReducer: State
}): State => state.photosReducer
