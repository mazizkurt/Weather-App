import React from 'react'
import { Provider } from 'react-redux'
import Navigation from 'src/navigation'
import store from 'src/redux/app/Store'

import "src/utils/localization/i18n";
const App = () => {


  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
