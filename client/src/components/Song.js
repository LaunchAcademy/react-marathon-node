import React from "react"

const Song = (props) => {
  const handleClick = () => {
    console.log("song was clicked!");
    props.setSelectedSongId(props.song.id)
  }

  let selectedClass = ""
  if (props.selectedSongId === props.song.id) {
    selectedClass = "selected"
  }

  return (
    <li className={selectedClass} onClick={handleClick}>{props.song.artist} - {props.song.name}</li>
  )
}

export default Song