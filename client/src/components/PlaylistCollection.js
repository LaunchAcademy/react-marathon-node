import React, { useState } from "react"
import Playlist from "./Playlist"

const PlaylistCollection = (props) => {
  // State is used to keep track of the currently selected playlist id
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null)

  // Mapping over the array of playlists which is passed in as a prop from App.js
  const playlistComponents = props.playlists.map((playlist) => {
    // Wrapper for onClick that preloads the current id into setSelectedPlaylistId
    const handleClick = () => {
      setSelectedPlaylistId(playlist.id)
    }

    // Building a string of classes that would be applied to the playlist as a prop
    let classList = ""

    // If the current playlist matches the selectedPlaylistId, add "selected" to the classList
    if (playlist.id === selectedPlaylistId) {
      classList += "selected"
    }

    // Return a new Playlist component to the map function with props
    return (
      <Playlist
        classList={classList}
        key={playlist.id}
        playlist={playlist}
        handleClick={handleClick}
      />
    )
  })

  // Render to page
  return (
    <div>
      <h1>Playlists</h1>
      {playlistComponents}
    </div>
  )
}

export default PlaylistCollection
