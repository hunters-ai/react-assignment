import { getPhotos } from '../../api/photos.api'

export const fetchPhotos = async () => {
  const photos = await getPhotos()

  return ({
    type: 'ADD_PHOTOS',
    payload: photos
  })
}
