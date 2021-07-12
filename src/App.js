import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";

const App=()=>{
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  )
}

export default App;