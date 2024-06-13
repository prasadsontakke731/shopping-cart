/* eslint-disable no-unused-vars */
import React from 'react'
import Body from './components/Body'
import "./App.css"
// import AnimCursor from './components/AnimCursor'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        {/* <AnimCursor /> */}
        <Body />
      </Provider>
    </div>
  )
}

export default App
