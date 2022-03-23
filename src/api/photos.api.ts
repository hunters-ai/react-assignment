import jsonp from 'jsonp'

export const getPhotos = async () => {
  return new Promise((resolve, reject) => {
    function jsonFlickrFeed (err: any, data: any) {
      if (err) {
        reject(err)
      } else {
        resolve(data?.items)
      }
    }

    jsonp(
      'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
      {
        name: 'jsonFlickrFeed'
      },
      jsonFlickrFeed
    )
  })
}
