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
  import WorkDetails from './pages/WorkDetails';
  import { Switch, Route, useLocation} from 'react-router-dom'
  import {AnimatePresence} from 'framer-motion';
  import GlobalStyles from './components/GlobalStyle';


// --------------------------------------
// Create Component
// --------------------------------------
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />

      <AnimatePresence exitBeforeEnter>
        <Switch location = {location} key = {location.path}>
          <Route exact path="/" component={AboutPage} />
          <Route exact path="/works" component={MyWorks} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/work/:id" component={WorkDetails} />
        </Switch>
      </AnimatePresence>
      
    </div>
  );
}

// --------------------------------------
// Exports
// --------------------------------------
export default App;
