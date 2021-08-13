import React from 'react'

export function Gif({ title, id, url }) {
  return (
    <a className="Gif" href={`#${id}`}>
      <h6>{title}</h6>
      <img src={url} alt={title} />
    </a>
  )
}
