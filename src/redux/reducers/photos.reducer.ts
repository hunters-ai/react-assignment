import { Photo } from '../../types/photo.type'
import { IActionAddPhotos, IActionFetchStart, IActionSetAuthorId } from '../actions/photos.actions'

export interface Action {
  type: 'ADD_PHOTOS' | 'FETCH_START' | 'SET_AUTHOR_ID',
  payload: State
}

export interface State {
  photos: Photo[],
  isFetching: boolean,
  selectedAuthorId: string,
}

const initialState: State = {
  photos: [],
  isFetching: false,
  selectedAuthorId: ''
}

type IAction = IActionAddPhotos | IActionFetchStart | IActionSetAuthorId

export const photosReducer = (state: State = initialState, action: IAction) => {
  if (action.type === 'FETCH_START') {
    state = {
      ...state,
      isFetching: true
    }
  }

  if (action.type === 'ADD_PHOTOS') {
    state = {
      ...state,
      photos: action.payload,
      isFetching: false
    }
  }

  if (action.type === 'SET_AUTHOR_ID') {
    state = {
      ...state,
      selectedAuthorId: action.payload
    }
  }

  return state
}
