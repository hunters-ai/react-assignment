import React from 'react'

import './Loader.scss'

export const Loader = ({ loading } : { loading: boolean}) => (
  <div className={loading ? 'c-Loader' : 'c-Loader.hide'}>
    <i/>
    <i/>
    <i/>
    <i/>
  </div>
)
