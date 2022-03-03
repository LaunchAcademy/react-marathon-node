import React from "react"

const Song = (props) => {
  // debugger
  return (
    <p>
      {props.songData.artist} - {props.songData.name}
    </p>
  )
}

export default Song
