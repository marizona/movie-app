import React, { Component } from 'react'
import {Header, MovieDetails, MovieList, MovieElement} from './components'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <div className='d-flex flex-row'>
        <MovieList/>
        <MovieDetails/>
        </div>
      </div>
    )
  }
}


export default App;