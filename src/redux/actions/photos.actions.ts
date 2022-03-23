import { getPhotos } from '../../api/photos.api'
import { Dispatch } from 'redux'
import { Photo } from '../../types/photo.type'
import { Action } from '../reducers/photos.reducer'

export interface IActionAddPhotos {
  type: 'ADD_PHOTOS';
  payload: Photo[];
}

export interface IActionFetchStart {
  type: 'FETCH_START';
  payload: boolean;
}

export interface IActionSetAuthorId {
  type: 'SET_AUTHOR_ID';
  payload: string;
}

export const addPhotos = (photos: Photo[]) : IActionAddPhotos => {
  return ({
    type: 'ADD_PHOTOS',
    payload: photos
  })
}

export const fetchPhotos = () => async (dispatch: Dispatch) => {
  dispatch({
    type: 'FETCH_START'
  })
  const photos = await getPhotos()
  dispatch(addPhotos(photos as Photo[]))
}

export const setAuthorId = (id: string): IActionSetAuthorId => {
  return ({
    type: 'SET_AUTHOR_ID',
    payload: id
  })
}
