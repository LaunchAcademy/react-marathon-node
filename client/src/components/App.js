import React, { useState, useEffect } from 'react'
import { hot } from "react-hot-loader/root"

import "../assets/main.scss"

const App = (props) => {
  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
    </div>
  );
}

export default hot(App)