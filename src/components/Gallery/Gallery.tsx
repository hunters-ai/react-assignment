import React from 'react'
import { Photo } from '../../types/photo.type'

import './Gallery.scss'

interface IGalleryProps {
  photos: Photo[];
  onSelection: (photoLink: string) => void
}

export const Gallery = ({ photos, onSelection }: IGalleryProps) => (
  <div className="c-Gallery">
    {photos.map((photo) => (
      <figure key={photo.link}>
        <img onClick={() => onSelection(btoa(photo.link))}
             src={photo?.media?.m}
             alt={photo?.title}
        />
      </figure>
    ))}
  </div>
)
