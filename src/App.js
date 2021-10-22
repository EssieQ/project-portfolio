import React, { useState } from "react";
import NavigationMenu from "./components/NavigationMenu";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ToggleSwitch from "./components/ToggleSwitch";
import SmoothScrollbar from "./components/SmoothScrollbar";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavigationMenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollbar>
      </Router>

      <ToggleSwitch
        rounded={true}
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
    </div>
  );
}

export default App;
