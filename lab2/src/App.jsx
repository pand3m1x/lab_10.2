import { useState } from 'react'
import './App.css'
import UsePaginationDemo from './components/UsePaginationDemo'
import UseDebounceDemo from './components/UseDebounceDemo'

function App() {

  return (
    <>
      <div style={{border:"2px solid green", borderRadius:"10px"}}>
      <UsePaginationDemo></UsePaginationDemo>
      </div>
      <UseDebounceDemo></UseDebounceDemo>
    </>
  )
}

export default App
