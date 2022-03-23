import React, { useState } from 'react'
import './GalleryRoute.scss'
import { debounce } from 'lodash'
import { SearchInput } from '../../components/SearchInput/SearchInput'
import { usePhotos } from '../../hooks/usePhotos'
import { Gallery } from '../../components/Gallery/Gallery'
import { Loader } from '../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { Photo } from '../../types/photo.type'
import { useDispatch } from 'react-redux'
import { setAuthorId } from '../../redux/actions/photos.actions'

export function GalleryRoute () {
  const {
    selectedAuthorId,
    isFetching,
    photos
  } = usePhotos()
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState<string>('')
  const filteredPhotos = photos.filter((photo: Photo) => {
    return photo.title.includes(searchText) && (!selectedAuthorId || photo.author_id === selectedAuthorId)
  })
  const navigate = useNavigate()

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleSelection = (photoId: number) => {
    dispatch(setAuthorId(''))
    navigate(`photo/${photoId}`)
  }

  return (
    <div className="r-GalleryRoute">
      <SearchInput onChange={debounce(onChangeSearchInput, 200)} />
      {isFetching
        ? <Loader loading={isFetching} />
        : <Gallery photos={filteredPhotos} onSelection={handleSelection} />}
    </div>
  )
}
