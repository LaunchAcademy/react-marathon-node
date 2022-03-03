import React, { useState } from "react"
import Playlist from "./Playlist.js"

const PlaylistCollection = (props) => {
  const [selectedPlaylistID, setSelectedPlaylistID] = useState(null)

  const playlists = props.playlists.map((playlist) => {
    let selectedStatus = false
    if (selectedPlaylistID === playlist.id) {
      selectedStatus = true
    }

    const handleClick = () => {
      setSelectedPlaylistID(playlist.id)
    }

    return (
      <Playlist
        key={playlist.id}
        playlist={playlist}
        handleClick={handleClick}
        selectedStatus={selectedStatus}
      />
    )
  })

  return (
    <div className="cell small-6">
      <h2>Playlists</h2>
      {playlists}
    </div>
  )
}

export default PlaylistCollection
