import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store';
import dynamic from 'next/dynamic'

const DiscoverContainer = dynamic(import('../containers/discover'),{ssr:false});

const App = () => (
  <Provider store={store}>
    <DiscoverContainer />
  </Provider>
)

export default App
