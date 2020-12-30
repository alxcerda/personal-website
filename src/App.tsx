import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import About from "./views/About";
import Blog from "./views/Blog";

export default function App() {
  return (
    <div id="app" className="fade-in">
      <div>
        <BrowserRouter>
          <Navigation />
          <div className="pt-20 md:pt-0">
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}
