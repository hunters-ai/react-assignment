import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './PhotoRoute.scss'
import { Photo } from '../../types/photo.type'
import { setAuthorId } from '../../redux/actions/photos.actions'
import { useAppSelector } from '../../hooks'

export const PhotoRoute = () => {
  const dispatch = useDispatch()
  const { photos } = useAppSelector(state => state.photosReducer)
  const navigate = useNavigate()
  const { id } = useParams()

  const changeLocation = (path: string) => {
    setTimeout(() => navigate(path))
  }

  if (!id) {
    changeLocation('/')
    return <div/>
  }

  const decodedId = atob(id as string)
  const selectedPhoto: Photo | undefined = photos.find((photo) => photo.link === decodedId)

  if (!selectedPhoto) {
    changeLocation('/')
    return <div/>
  }

  const definedSelectedPhoto: Photo = selectedPhoto as Photo

  const handleSelection = () => {
    dispatch(setAuthorId((selectedPhoto as Photo).author_id))
    changeLocation('/')
  }

  return (
    <div className="r-PhotoRoute" >
      <div className="r-PhotoRoute__all-photos">
        <ul>
            {photos.map((photo: Photo, idx: number) => <li key={idx}>{photo.title}</li>)}
        </ul>
      </div>
      <figure className="r-PhotoRoute__photo">
          <span>Title: {definedSelectedPhoto.title}</span>
          <img src={definedSelectedPhoto.media.m} alt={definedSelectedPhoto.title} onClick={handleSelection} />
          <span>Author: {definedSelectedPhoto.author}</span>
          <span>Date: {new Date(definedSelectedPhoto.date_taken).toLocaleDateString('en-GB')}</span>
      </figure>
    </div>
  )
}
