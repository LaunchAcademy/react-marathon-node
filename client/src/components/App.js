import React, { useState, useEffect } from "react"
import { hot } from "react-hot-loader/root"
import PlaylistCollection from "./PlaylistCollection"

import "../assets/main.scss"
import SongCollection from "./SongCollection"

const App = (props) => {
  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <div className="grid-x grid-margin-x">
        <PlaylistCollection playlists={props.data.playlists} />
        <SongCollection songs={props.data.songs} />
      </div>
    </div>
  )
}

export default hot(App)
