import React, { Component } from "react";
import { News  } from "./Components/News";
import { NavBar } from "./Components/navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />

        <Routes>
          <Route exat path="/" element={<News key ="general" pageSize={5} category="general" />} />
          <Route exat path="/about" element={<News key ="general" pageSize={5} category="general" />} />
          <Route exat path="/business" element={<News key ="business" pageSize={5} category="business" />} />
          <Route exat path="/entertainment" element={<News key ="entertenment" pageSize={5} category="entertainment" />} />
          <Route exat path="/health" element={<News key ="health" pageSize={5} category="health" />} />
          <Route exat path="/science" element={<News key ="science" pageSize={5} category="science" />} />
          <Route exat path="/sports" element={<News key ="sports" pageSize={5} category="sports" />} />
          <Route exat path="/technology" element={<News key ="technology" pageSize={5} category="technology" />} />
        </Routes>

      </Router>
    );
  }
}
