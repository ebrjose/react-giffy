import React, { useEffect, useState } from 'react'
import { getGifts } from '../services/apiGifs'
import { Gif } from './Gif'

export function ListOfGifs({ params }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  const { keyword } = params

  useEffect(() => {
    setLoading(true)
    getGifts({ keyword }).then((gifs) => setGifs(gifs))
  }, [keyword])

  if (loading) return <h1>Cargando</h1>

  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  )
}
