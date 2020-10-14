// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const Box = ({size, style, ...otherProps}) => {
  const sizeClassname = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${sizeClassname}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box style={{backgroundColor: 'lightblue'}} size="small">
        small lightblue box
      </Box>
      <Box style={{backgroundColor: 'pink'}} size="medium">
        medium pink box
      </Box>
      <Box style={{backgroundColor: 'orange'}} size="large">
        large orange box
      </Box>
      <Box> Sizeless</Box>
    </div>
  )
}

export default App
