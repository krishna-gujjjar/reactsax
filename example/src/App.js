import React from 'react'

import { Button } from 'reactsax'
import 'reactsax/dist/index.css'

const App = () => {
  return (
    <>
      <Button success styleType={'relief'}>
        Hello
      </Button>
      <Button color={'danger'} styleType={'flat'}>
        Hello
      </Button>
      <Button warning relief>
        Hello
      </Button>
    </>
  )
}

export default App
