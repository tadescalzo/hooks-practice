import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('me volvi a generar')
  return (
    <h1>Counter: <small> {value} </small></h1>
  )
})
