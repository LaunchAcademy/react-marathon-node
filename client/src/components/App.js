import React from "react"
import { hot } from "react-hot-loader/root"

import "../assets/main.scss"

import PlaylistCollection from "./PlaylistCollection"
import SongCollection from "./SongCollection"

const App = (props) => {
  // debugger
  const playlists = props.dataFromMain.playlists
  const songs = props.dataFromMain.songs
  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <div className="grid-x">
        <PlaylistCollection playlistArray={playlists} />
        <SongCollection songArray={songs} />
      </div>
    </div>
  )
}

export default hot(App)
