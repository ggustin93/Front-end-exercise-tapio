import React, { Component } from 'react'
import Router from './components/Router'
// Required for side-effects
require('firebase/firestore')

class App extends Component {
  render() {
    return <Router />
  }
}

export default App
