import React from "react"

const Playlist = (props) => {
  // debugger
  let className = ""
  if (props.selectedStatus) {
    className += "selected"
  }
  return (
    <div>
      <p onClick={props.handleClick} className={className}>
        {props.playlist.name}
      </p>
    </div>
  )
}

export default Playlist
