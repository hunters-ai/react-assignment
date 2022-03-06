import React from 'react'
import { Photo } from '../../types/photo.type'

import './Gallery.scss'

interface IGalleryProps {
  photos: Photo[];
}

export const Gallery = ({ photos }: IGalleryProps) => (
  <div className="c-Gallery">
    {photos.map(() => (
      <figure>
        <img src={''} alt={''}/>
      </figure>
    ))}
  </div>
)
