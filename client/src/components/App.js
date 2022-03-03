import React from "react"
import { hot } from "react-hot-loader/root"

//Import of css file at top level component
import "../assets/main.scss"

import PlaylistCollection from "./PlaylistCollection"
import SongCollection from "./SongCollection"

const App = (props) => {
  // Destructuring of props.data
  const { playlists, songs } = props.data

  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <div className="flex-container">
        {/* Render PlayListCollection passing playlist array as props */}
        <PlaylistCollection playlists={playlists} />

        {/* Render SongCollection passing songs array as props */}
        <SongCollection songs={songs} />
      </div>
    </div>
  )
}

export default hot(App)
