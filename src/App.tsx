import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { GalleryRoute } from './routes/GalleryRoute/GalleryRoute'
import { PhotoRoute } from './routes/PhotoRoute/PhotoRoute'

import 'normalize.css'
import './App.scss'
import { useDispatch } from 'react-redux'
import { setAuthorId } from './redux/actions/photos.actions'

function App () {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <Link to="/" onClick={() => dispatch(setAuthorId(''))}>
        <img src="https://hunters-webapp-static-assets.s3.us-west-2.amazonaws.com/huntersLogoBlue.png" alt="Hunters" className="App__logo" />
      </Link>

      <Routes>
        <Route path="/" element={<GalleryRoute />} />
        <Route path="/photo/:id" element={<PhotoRoute />} />
      </Routes>
    </div>
  )
}

export default App
