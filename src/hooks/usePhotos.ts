import { useDispatch, useSelector } from 'react-redux'
import { photosSelector } from '../redux/selectors/photos.selectors'
import { useEffect } from 'react'
import { fetchPhotos } from '../redux/actions/photos.actions'

export const usePhotos = () => {
  const dispatch = useDispatch()
  const { photos, isFetching } = useSelector(photosSelector)

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])

  return {
    photos,
    isFetching
  }
}
