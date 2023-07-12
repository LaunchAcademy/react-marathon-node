import React from "react"

const Playlist = (props) => {
  // debugger

  const handleClick = () => {
    console.log("playlist was clicked!");
    props.setSelectedPlaylistId(props.playlist.id)
  }

  let selectedClass = ""
  console.log("currently selected", props.selectedPlaylistId);
  console.log("this playlist id", props.playlist.id);
  console.log(props.selectedPlaylistId === props.playlist.id);
  if (props.selectedPlaylistId === props.playlist.id) {
    selectedClass = "selected"
  }

  return (
    <li className={selectedClass} onClick={handleClick}>{props.playlist.name}</li>
  )
}

export default Playlist