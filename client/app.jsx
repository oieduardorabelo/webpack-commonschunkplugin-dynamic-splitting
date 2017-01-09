import React from 'react'
import ReactDOM from 'react-dom'

import Admin from './admin/admin'
import Dashboard from './dashboard/dashboard'
import Settings from './settings/settings'

const App = () => (
  <main>
    {Admin}
    {Dashboard}
    {Settings}
  </main>
)

ReactDOM.render(
 <App />,
 document.querySelector("#RootApp"),
)
