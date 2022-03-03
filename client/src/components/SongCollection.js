import React from "react"

import Song from "./Song"

const SongCollection = (props) => {
  // need to map through a list of songs
  const songsList = props.songs.map((song) => {
    // Create a Song component for each
    return <Song songData={song} key={song.id} />
  })

  // return the list at the bottom
  return (
    <div className="cell small-6">
      <h2>Songs</h2>
      {songsList}
    </div>
  )
}
export default SongCollection
