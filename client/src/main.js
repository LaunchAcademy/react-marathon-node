import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

// Import the data
import data from "./constants/data"

// Top level component is rendered to element on page with id of 'app'
// The imported data is passed as a prop to the App component (data={data})
ReactDOM.render(<App data={data} />, document.getElementById("app"))
