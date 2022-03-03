import React, { useState } from "react"

import Song from "./Song"

const SongCollection = (props) => {
  const [selectedSongId, setSelectedSongId] = useState(null)

  const songComponents = props.songs.map((song) => {
    const handleClick = () => {
      setSelectedSongId(song.id)
    }

    let classList = ""
    if (selectedSongId === song.id) {
      classList += "selected"
    }

    return <Song key={song.id} song={song} handleClick={handleClick} classList={classList} />
  })

  return (
    <div>
      <h1>Songs</h1>
      {songComponents}
    </div>
  )
}

export default SongCollection
