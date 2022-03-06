import React, { useState } from 'react'
import { SearchInput } from '../../components/SearchInput/SearchInput'
import { usePhotos } from '../../hooks/usePhotos'

import './GalleryRoute.scss'

export function GalleryRoute () {
  const {
    isFetching,
    photos
  } = usePhotos()
  const [searchText, setSearchText] = useState<>(null)

  const onChangeSearchInput = (e) => {

  }

  return (
    <div className="r-GalleryRoute">
      <SearchInput onChange={onChangeSearchInput} />

    </div>
  )
}
