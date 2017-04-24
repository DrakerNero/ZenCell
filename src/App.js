import React from 'react'
import * as Sections from './components/sections'

const App = () => {
  return (
    <div className="app">
      <div className="section">
        <div className="container">
          <Sections.Section1 />
          <Sections.Section2 />
        </div>
      </div>
    </div>
  )
}

export default App