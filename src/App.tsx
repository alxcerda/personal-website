import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import About from "./views/About";
import Blog from "./views/Blog";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" render={About} />
          <Route exact path="/portfolio" render={Portfolio} />
          <Route exact path="/blog" render={Blog} />
          <Route exact path="/contact" render={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
