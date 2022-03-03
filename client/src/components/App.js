import React from "react"
import { hot } from "react-hot-loader/root"

import "../assets/main.scss"
import PlaylistCollection from "./PlaylistCollection"
import SongCollection from "./SongCollection"

const App = (props) => {
  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <div className="grid-x grid-margin-x">
        <PlaylistCollection data={props.data.playlists} />
        <SongCollection data={props.data.songs} />
      </div>
    </div>
  )
}

export default hot(App)
