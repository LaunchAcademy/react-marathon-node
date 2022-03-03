import React from "react"

const Song = (props) => {
  return (
    <p className={props.classList} onClick={props.handleClick}>
      {props.song.artist} - {props.song.name}
    </p>
  )
}

export default Song
