import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchPhotos } from '../redux/actions/photos.actions'
import { useAppSelector } from '../hooks'

export const usePhotos = () => {
  const dispatch = useDispatch()
  const { photos, isFetching, selectedAuthorId } = useAppSelector(state => state.photosReducer)

  useEffect(() => {
    if (!photos.length) {
      dispatch(fetchPhotos())
    }
  }, [photos])

  return {
    selectedAuthorId,
    photos,
    isFetching
  }
}
