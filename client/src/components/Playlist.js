import React from "react"

const Playlist = (props) => {
  // Render information given from props including the onClick event
  return (
    <h3 className={props.classList} onClick={props.handleClick}>
      {props.playlist.name}
    </h3>
  )
}

export default Playlist
