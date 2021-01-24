/* ==========================================================================
** Main App Component
** 23/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
import React from 'react';
import Nav from './components/nav/Nav';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import MyWorks from './pages/MyWorks';
import { Switch, Route } from 'react-router-dom'
import GlobalStyles from './components/GlobalStyle';


// --------------------------------------
// Create Component
// --------------------------------------
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />

      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route exact path="/works" component={MyWorks} />
        <Route exact path="/contact" component={Contact} />
      </Switch>

      
    </div>
  );
}

// --------------------------------------
// Exports
// --------------------------------------
export default App;
