import React, { Component } from 'react'
import Router from './components/Router'
const firebase = require('firebase')
// Required for side-effects
require('firebase/firestore')

class App extends Component {
  render() {
    return <Router />
  }
}

export default App
