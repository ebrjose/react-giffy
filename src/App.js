import React, { useState } from 'react'
import './App.css'

import { Link, Route } from 'wouter'

import { ListOfGifs } from './components/ListOfGifs'

function App() {
  const [keyword, setkeyword] = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/gif/rick">Rick</Link>
        <Link to="/gif/morty">Morty</Link>

        <Route path="/gif/:keyword" component={ListOfGifs}></Route>
      </section>
    </div>
  )
}

export default App
