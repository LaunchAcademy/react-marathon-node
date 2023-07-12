import React, { useState } from "react"

import Playlist from "./Playlist"

const PlaylistCollection = (props) => {
  // debugger
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null)
  console.log("selected playlist id:", selectedPlaylistId);

  const playlistComponents = props.playlistArray.map((playlist) => {
    // console.log(playlist);
    return (
      <Playlist 
        playlist={playlist}
        key={playlist.id}
        selectedPlaylistId={selectedPlaylistId}
        setSelectedPlaylistId={setSelectedPlaylistId}
      />
    )
  })
  // debugger
  // console.log(playlistComponents);

  return (
    <div className="cell small-6">
      <h3>Playlists</h3>
      {/* <Playlist playlist={props.playlistArray[0]} /> */}
      <ul>
        {playlistComponents}
      </ul>
    </div>
  )
}

export default PlaylistCollection
