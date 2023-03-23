import * as React from 'react'
import './App.css'
import { createComponent } from '@lit-labs/react'
import { SuperSearch } from 'lit-webcomponent-demo'

// workaround to load LitJS component as keep having issue with react not load
export const SuperSearchElement = createComponent({
  tagName: 'super-search',
  elementClass: SuperSearch,
  react: React
});

// View
function App() {
  return (
    <div className="App">
      <div className="top-header">
        <h3 className="main-title">LitJS component package running in ReactJS.</h3>
        <p className="sub">Click here to learn <a href="https://media.tenor.com/QMYWj5A9tBwAAAAd/rick-roll-rick-astley.gif">more</a></p>
      </div>
      <SuperSearchElement></SuperSearchElement>
    </div>
  )
}

export default App;
