import React, { useState } from "react"

import Song from "./Song"

const SongCollection = (props) => {
  const [selectedSongId, setSelectedSongId] = useState(null)

  const songComponents = props.songArray.map((song) => {
    return (
      <Song 
        song={song}
        key={song.id}
        selectedSongId={selectedSongId}
        setSelectedSongId={setSelectedSongId}
      />
    )
  })

  return (
    <div className="cell small-6">
      <h3>Songs</h3>
      <ul>
        {songComponents}
      </ul>
    </div>
  )
}

export default SongCollection
